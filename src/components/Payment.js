import React from 'react'
import '../index.css'

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
 
export default Payment;