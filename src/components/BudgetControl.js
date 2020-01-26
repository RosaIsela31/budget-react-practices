import React, { Fragment } from 'react';
import { checkBudget } from '../helper';
import '../index.css'

const BudgetControl = ({ budget, remaining }) => {
  return ( 
    <Fragment>
      <div className='alert alert-primary'>
        Presupuesto: $ {budget}
      </div>
      <div className={checkBudget(budget, remaining)}>
        Restante: $ {remaining}
      </div>
    </Fragment>
   );
}
 
export default BudgetControl;