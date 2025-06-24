import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (val) => {
    setInput((prev) => prev + val)
  }

  const clearInput = () => {
    setInput('');
    setResult('');
  }

  const calculate = () => {
    const evalResult = eval(input);
    setResult(evalResult)
  }
  return (
    <>
      <div className='calculator'>
        <h1>React Calculator</h1>
        <input type='text' value={input} readOnly />
        <div className='buttons'>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('/')}>/</button>

          <button onClick={clearInput}>C</button>
          <button onClick={calculate}>=</button>
          <p>{result !== "" && `Answer - ${result}`}</p>
        </div>
      </div>
    </>
  )
}

export default App;
