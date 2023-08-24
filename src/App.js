import './App.css';
import ButtonClic from './components/buttonClic';
import CounterContainer from './components/counterContainer';
import reactlogo from './images/react-logo.PNG';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics]= useState(0);

  const handleClick = () =>{
    setNumClics(numClics + 1);
  }

  const reloadCounter = () =>{
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className="logo-content">
        <img className='img-logo' src={reactlogo} alt='logo'/>
      </div>
      <div className='counter-container'>
        <CounterContainer numClics ={numClics}/>
      </div>
      <div className="buttons-content">
        <ButtonClic 
          text='Clic'
          isButtonClic ={true}
          handleClick={handleClick} />
        <ButtonClic
          text='Reestart'
          isButtonClic ={false}
          handleClick={reloadCounter} />
      </div>
    </div>
  );
}

export default App;
