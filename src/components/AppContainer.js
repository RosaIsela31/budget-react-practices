import React, { useState, useEffect } from 'react';
import Question from './Question';
import Form from './Form';
import List from '../components/List'
import BudgetControl from './BudgetControl'
import '../index.css';


function AppContainer() {
  // Definir el state

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showquestion, setShowquestion ] = useState(true);
  const [ payments, setPayments ] = useState([]);
  const [ payment, setPayment ] = useState({});
  const [ createPayment, setCreatePayment ] = useState(false);

  // useEffect que actualiza el restante 
  useEffect(() => { 
    if(createPayment){

      // Agrega el nuevo presupuesto
      setPayments([
        ...payments,
        payment
      ])   

      // Resta del presupuesto actual
      const paymentRest = remaining - payment.expense;
      setRemaining(paymentRest)
      console.log(remaining);
      

      // Resetear a false 
      setCreatePayment(false)
    } 
  }, [payment]);



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
                    setPayment={setPayment}
                    setCreatePayment={setCreatePayment}
                  />
                </div>
                <div className='one-half column'>
                  <List 
                    payments={payments}
                  />
                  <BudgetControl 
                    budget={budget}
                    remaining={remaining}
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
