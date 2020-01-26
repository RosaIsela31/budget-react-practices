import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Payment = ({ payment }) => {
  return ( 
    <div>
      <li className='gastos'>
        <p>
          {payment.name}
          <span className='gasto'>$ {payment.expense}</span>
        </p>
      </li>
    </div>
   );
}
 
Payment.propTypes = {
  payment: PropTypes.object.isRequired
}

export default Payment;