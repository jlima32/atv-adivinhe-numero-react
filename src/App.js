import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Palpite from './components/palpite/palpite';
import randomInteger from 'random-int';
import Resultado from './components/resultado/resultado';

function App() {
  
  const inicial = 1;
  const final = 10;
  const [sorteado, setSorteado] = useState(null);
  const [palpite, setPalpite] = useState(null);
  const [tentativas, setTentativas] = useState(0);

  function SortearNumero(){
      setSorteado(randomInteger(inicial,final));
  }

  function chutar(){
    const palpiteInput = document.querySelector('.palpiteText');
    const palpiteDigitado = palpiteInput.value;
    setPalpite(palpiteDigitado);
    setTentativas(tentativas + 1);
    palpiteInput.value = '';
    
  }

  function verificarPalpite(palpiteDigitado){
    return Number(palpiteDigitado) === Number(sorteado);
  }

  if (sorteado === null){
    SortearNumero();
  }

  
  return (
    <div className='container'>
      <Header />
      {palpite === null ? 
      <div>
        <input type="text" name="palpite" className="palpiteText" placeholder={`Digite um numero entre ${inicial} e ${final}`}/>
        <button type="submit" className="btnPalpitar" onClick={chutar}>CHUTAR</button>
      </div>
      : 
      <div>
        {verificarPalpite(Number(palpite)) ? 
          <Resultado resultado='acertou' palpite={palpite} sorteado={sorteado} tentativas={tentativas}/>
          : 
          <div>
            <Resultado resultado='errou' palpite={palpite} sorteado={sorteado}/>
            <input type="text" name="palpite" className="palpiteText" placeholder={`Digite um numero entre ${inicial} e ${final}`} />
            <button type="submit" className="btnPalpitar" onClick={chutar}>CHUTAR</button>
          </div>
        }
        
      </div>
      }
      
    </div>
  );
  
}

export default App;
