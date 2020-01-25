import React, { useState } from 'react';
import Question from './Question';
import Form from './Form';
import '../index.css';


function AppContainer() {
  // Definir el state

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);

  return (
    <div className="container">
      <header>
          <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          <Question 
            setBudget={setBudget}
            setRemaining={setRemaining}
          />
          <div className='row'>
            <div className='one-half column'>
              <Form />
            </div>
            <div className='one-half column'>
             2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AppContainer;
