import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import randomInteger from 'random-int';
import Resultado from './components/resultado/resultado';
import Input from './components/input/input';

function App() {
  //Configurações
  
  const inicial = 1; // Valor inicial para o intervalo do número a ser sorteado
  const final = 100; // Valor final para o intervalo do número a ser sorteado


  const [sorteado, setSorteado] = useState(null); // variável sorteado e armazena o valor null
  const [palpite, setPalpite] = useState(null); // variável palpite e armazena o valor null
  const [tentativas, setTentativas] = useState(0); // variável tentativas e armazena o valor 0

  //Função para gerar um número aleatório
  function SortearNumero(){
      setSorteado(randomInteger(inicial,final)); //gera um numero aleatório e armazena em sorteado
  }

  //Função executada ao clicar no botão CHUTAR
  function chutar(){
    const palpiteInput = document.querySelector('.palpiteInput'); // campo referente ao palpite
    //verifica se o palpite digitado está vazio,  fora do intervalo configurado anteriormente e se não é um número
    if(palpiteInput.value === '' || palpiteInput.value < inicial || palpiteInput.value > final || isNaN(palpiteInput.value) ){
      alert(`Digite um número entre ${inicial} e ${final}`)
      palpiteInput.value = ''; // limpa o imput
    }else{
      const palpiteDigitado = palpiteInput.value; // guarda o valor do input
      setPalpite(palpiteDigitado); // atualiza o valor do palpite de null para o palpite digitado
      setTentativas(tentativas + 1); // incremente o número de tentativas
      palpiteInput.value = ''; // limpa o imput
    }
    
  }

  function verificarPalpite(palpiteDigitado){
    // verifica se o número digitado é igual ao número sorteado
    return Number(palpiteDigitado) === Number(sorteado);
  }

  // reinicia o jogo
  function jogarNovamente(){
    setSorteado(null);
    setPalpite(null);
    setTentativas(0);
  }

  //verifica se sorteado é igual a null, se sim, sorteia um número para iniciar o jogo
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
