import { useEffect, useState } from 'react';

import Calculator from './components/Calculator/Calculator';
import './index.css';

const DarkModeToggle = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
      if (isDarkMode) {
         document.body.classList.add('dark-theme');
      } else {
         document.body.classList.remove('dark-theme');
      }
   }, [isDarkMode]);

   return (
      <button
         id="darkModeToggle"
         className="darkmodeToggle"
         onClick={() => setIsDarkMode(!isDarkMode)}
      >
         Toggle Dark Mode
      </button>
   );
};

function App() {
   return (
      <>
         <div>
            <button id="darkModeToggle" className="darkmode">
               <DarkModeToggle />
            </button>
         </div>
         <Calculator />
      </>
   );
}

export default App;
