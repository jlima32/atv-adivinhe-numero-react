import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Palpite from './components/palpite/palpite';
import randomInteger from 'random-int';
import Resultado from './components/resultado/resultado';

function App() {
  
  const inicial = 1;
  const final = 4;
  const [sorteado, setSorteado] = useState(null);
  const [palpite, setPalpite] = useState(null);

  function SortearNumero(){
      setSorteado(randomInteger(inicial,final));
  }

  function chutar(){
    const palpiteDigitado = document.querySelector('.palpiteText').value;
    setPalpite(palpiteDigitado);
    
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
      {sorteado}
      
      {palpite === null ? 
      <div>
        <input type="text" name="palpite" className="palpiteText" placeholder={`Digite um numero entre ${inicial} e ${final}`} />
        <button type="submit" className="btnPalpitar" onClick={chutar}>CHUTAR</button>
      </div>
      : 
      <div>
        {verificarPalpite(Number(palpite)) ? 
          <Resultado resultado='acertou' palpite={palpite} sorteado={sorteado}/>
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
