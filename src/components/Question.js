import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = () => {
   // Definir state
   const [ amount, setAmount ] = useState(0);
   const [ error, setError ] = useState(false);

   // Función que lee el presupuesto
   const defineAmount = (e) => {
     setAmount( parseInt(e.target.value, 10) )     
   }

   // Submit para definir el presupuesto
   const addAmount = (e) => {
     e.preventDefault();

     //Validar
     if(amount < 1 || isNaN(amount)){
       setError(true)
       return;
     }
     //Que sucede una vez pasada la validación 
     setError(false)
   }

  return ( 
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message='El Presupuesto es Incorrecto' /> : null}
      <form
        onSubmit={addAmount}
      >
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={defineAmount}
        />
        <input
          type='submit'
          className='button-primary u-full-width' 
          value='Definir Presupuesto'
        />
      </form>
    </Fragment>
   );
}
 
export default Question;