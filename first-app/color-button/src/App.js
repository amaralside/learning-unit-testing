import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input 
        defaultChecked={disabled} 
        id='disable-button-checkbox' 
        onChange={(event) => setDisabled(event.target.checked)} 
        type='checkbox' />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
