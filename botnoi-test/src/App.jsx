import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputs, setOutputs] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      const num = parseInt(inputValue);
      if (!isNaN(num) && num >= 0) {
        const starsArray = [];
        for (let i = 1; i <= num; i++) {
          starsArray.push('*'.repeat(i));
        } 
        for (let i = num - 1; i >= 1; i--) {
          starsArray.push('*'.repeat(i));
        }
        setOutputs([...starsArray]);
        setInputValue('');
      } 
    } 
  };

  return (
    <div className='App'>
      <p>
        Input : <input type='text' value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <div>
        {outputs.map((output, index) => (
          <p key={index}> {output}</p>
        ))}
      </div>
    </div>
  );
}
export default App;

