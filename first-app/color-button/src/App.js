import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input 
        defaultChecked={disabled} 
        id='disabled-button-checkbox' 
        onChange={(event) => setDisabled(event.target.checked)} 
        type='checkbox' />
    </div>
  );
}

export default App;
