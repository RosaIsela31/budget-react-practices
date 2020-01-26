import React, { Fragment } from 'react';
import '../index.css'

const BudgetControl = ({ budget, remainig }) => {
  return ( 
    <Fragment>
      <div className='alert alert-primary'>
        Presupuesto: $ {budget}
      </div>
      <div>
        Restante: $ {remainig}
      </div>
    </Fragment>
   );
}
 
export default BudgetControl;