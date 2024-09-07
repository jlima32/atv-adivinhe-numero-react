import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Palpite from './components/palpite/palpite';
import randomInteger from 'random-int';

function App() {

  const inicial = 0;
  const final = 10;
  const [sorteado, setSorteado] = useState(0);
  const [palpitar, setPalpitar] = useState(true);

  function SortearNumero(){
    setSorteado(randomInteger(inicial,final));
    setPalpitar(false);
  }


  
  return (
    <div className='container'>
      {palpitar ? SortearNumero() : ''}
      <Header />
      {sorteado}
      {sorteado === 5 ? 'acertou' : <Palpite inicial={inicial} final={final}/>}
    </div>
  );
  
}

export default App;
