import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
   const [input, setInput] = useState('');

   const handleClick = (value) => {
      setInput((prev) => prev + value);
   };

   const handleClear = () => {
      setInput('');
   };

   const handleCalculate = () => {
      try {
         setInput(eval(input).toString());
      } catch (error) {
         setInput('Error');
      }
   };

   return (
      <div className="cal-calculator">
         <div className="cal-calculatorContainer">
            <div className="cal-display">
               <input type="text" value={input} readOnly className="cal-inputResult" disabled />
            </div>
            <div className="cal-buttons">
               <button className="cal-button cal-button-wide" onClick={handleClear}>
                  C
               </button>
               <button className="cal-button" onClick={() => handleClick('1')}>
                  1
               </button>
               <button className="cal-button" onClick={() => handleClick('2')}>
                  2
               </button>
               <button className="cal-button" onClick={() => handleClick('3')}>
                  3
               </button>
               <button className="cal-button" onClick={() => handleClick('+')}>
                  +
               </button>
               <button className="cal-button" onClick={() => handleClick('4')}>
                  4
               </button>
               <button className="cal-button" onClick={() => handleClick('5')}>
                  5
               </button>
               <button className="cal-button" onClick={() => handleClick('6')}>
                  6
               </button>
               <button className="cal-button" onClick={() => handleClick('/')}>
                  /
               </button>
               <button className="cal-button" onClick={() => handleClick('7')}>
                  7
               </button>
               <button className="cal-button" onClick={() => handleClick('8')}>
                  8
               </button>
               <button className="cal-button" onClick={() => handleClick('9')}>
                  9
               </button>
               <button className="cal-button" onClick={() => handleClick('-')}>
                  -
               </button>
               <button className="cal-button" onClick={() => handleClick('.')}>
                  .
               </button>
               <button className="cal-button" onClick={() => handleClick('0')}>
                  0
               </button>
               <button className="cal-button" onClick={() => handleClick('*')}>
                  *
               </button>
               <button className="cal-button cal-button-wide" onClick={handleCalculate}>
                  =
               </button>
            </div>
         </div>
      </div>
   );
};

export default Calculator;
