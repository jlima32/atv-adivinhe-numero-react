import './App.css';
import Header from './components/header/header';
import Palpite from './components/palpite/palpite';
import randomInteger from 'random-int';

function App() {


  let inicial, final;

  function SortearNumero(){
    inicial = 0;
    final = 10;
    
    const numeroAleatorio = randomInteger(inicial,final);
    return numeroAleatorio;
    
  }

  
  return (
    <div className='container'>

      <SortearNumero />
      <Header />
      <Palpite />
    </div>
  );
  
}

export default App;
