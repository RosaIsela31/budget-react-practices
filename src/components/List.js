import React from 'react';
import Payment from './Payment';
import PropTypes from 'prop-types';
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

List.propTypes = {
   payments: PropTypes.array.isRequired
}
 
export default List;