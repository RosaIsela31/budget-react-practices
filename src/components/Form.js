import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setPayment, setCreatePayment }) => {
  const [ name, setName ] = useState('');
  const [ expense, setExpense ] = useState(0);
  const [ error, setError ] = useState(false);

  // Cuando el usuario agrega un gasto
  const addExpense = (e) => {
    e.preventDefault();

    // Validar
    if(expense < 1 || isNaN(expense) || name.trim() === ''){
      setError(true)
      return;
    }

    setError(false)

    // Construir el gasto 
    const expenses = {
      name,
      expense,
      id: shortid.generate()
    }
    console.log(expenses);
    
    // Pasar el gasto al componente principal
    setPayment(expenses)
    setCreatePayment(true)

    // Resetear el form
    setName('')
    setExpense(0)
  }

  return ( 
    <form
      onSubmit={addExpense}
    >
      <h2>Agrega tus gastos aquí</h2>
      {error 
        ? 
          (
            <Error message='Ambos campos son obligatorios o presupesto incorrecto' />
          )
        :
          null
      }
      <div className='campo'>
        <label>Nombre Gasto</label>
        <input 
          type='text'
          className='u-full-width'
          placeholder='ej. transporte'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>
      <div className='campo'>
        <label>Cantidad Gasto</label>
        <input 
          type='number'
          className='u-full-width'
          placeholder='ej. 300'
          value={expense}
          onChange={(e) => {setExpense(parseInt(e.target.value, 10 ))}}
        />
      </div>
      <input 
        type='submit'
        className='button-primary u-full-width'
        value='Agregar Gasto'
      />
    </form>
   );
}
 
export default Form;