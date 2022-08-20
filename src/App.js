import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ buttonColor, setButton] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
        onClick={() => setButton(newButtonColor)} 
        style={{backgroundColor: `${buttonColor}`}}
      >
          Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
