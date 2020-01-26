import React from 'react';
import Payment from './Payment'
import '../index.css'

const List = ({ payments }) => {
  return ( 
    <div className='gastos-realizados'>
      <h2>Listado</h2>
      {payments.map(payment => (
        <Payment 
          key={payment.id}
          payment={payment}
        /> 
      ))}
    </div>
   );
}
 
export default List;