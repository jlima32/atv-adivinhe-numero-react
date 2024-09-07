import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import randomInteger from 'random-int';
import Resultado from './components/resultado/resultado';
import Input from './components/input/input';

function App() {
  
  const inicial = 1;
  const final = 100;
  const [sorteado, setSorteado] = useState(null);
  const [palpite, setPalpite] = useState(null);
  const [tentativas, setTentativas] = useState(0);

  function SortearNumero(){
      setSorteado(randomInteger(inicial,final));
  }

  function chutar(){
    const palpiteInput = document.querySelector('.palpiteInput');
    if(palpiteInput.value === '' || palpiteInput.value < inicial || palpiteInput.value > final || isNaN(palpiteInput.value) ){
      alert(`Digite um número entre ${inicial} e ${final}`)
      palpiteInput.value = '';
    }else{
      const palpiteDigitado = palpiteInput.value;
      setPalpite(palpiteDigitado);
      setTentativas(tentativas + 1);
      palpiteInput.value = '';
    }
    
  }

  function verificarPalpite(palpiteDigitado){
    return Number(palpiteDigitado) === Number(sorteado);
  }

  function jogarNovamente(){
    setSorteado(null);
    setPalpite(null);
    setTentativas(0);
  }

  if (sorteado === null){
    SortearNumero();
  }

  
  return (
    <div className='container'>
      <Header />
      {palpite === null ? 
      <div>
        <Input nome='palpiteInput' classe='palpiteInput' placeholder={`Digite um numero entre ${inicial} e ${final}`}/>
        <button type="submit" className="btnPalpitar" onClick={chutar}>CHUTAR</button>
      </div>
      : 
      <div>
        {verificarPalpite(Number(palpite)) ? 
          <div>
            <Resultado resultado='acertou' palpite={palpite} sorteado={sorteado} tentativas={tentativas}/>
            <button type="submit" className="btnPalpitar" onClick={jogarNovamente}>JOGAR NOVAMENTE</button>
          </div>
          : 
          <div>
            <Resultado resultado='errou' palpite={palpite} sorteado={sorteado}/>
            <Input nome='palpiteInput' classe='palpiteInput' placeholder={`Digite um numero entre ${inicial} e ${final}`} />
            <button type="submit" className="btnPalpitar" onClick={chutar}>CHUTAR</button>
          </div>
        }
        
      </div>
      }
      
    </div>
  );
  
}

export default App;
