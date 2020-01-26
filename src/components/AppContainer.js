import React, { useState } from 'react';
import Question from './Question';
import Form from './Form';
import List from '../components/List'
import '../index.css';


function AppContainer() {
  // Definir el state

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showquestion, setShowquestion ] = useState(true);
  const [ payments, setPayments ] = useState([]);

  // Cuando agreguemos un nuevo gasto
  const addNewPayment = gasto => {
    setPayments([
      ...payments,
      gasto
    ])    
  }

  return (
    <div className="container">
      <header>
          <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
        {showquestion 
          ? 
            (
              <Question 
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowquestion={setShowquestion}
              />
            )
          : 
            (
              <div className='row'>
                <div className='one-half column'>
                  <Form
                    addNewPayment={addNewPayment}
                  />
                </div>
                <div className='one-half column'>
                  <List 
                    payments={payments}
                  />
                </div>
              </div>
            )
        }
        </div>
      </header>
    </div>
  );
}

export default AppContainer;
