export const checkBudget = ( budgethelper, remaininghelper ) => {
  let clase;

  if( (budgethelper / 4 ) > remaininghelper ){
    clase = 'alert alert-danger';
  } else if ( (budgethelper / 2) > remaininghelper ){
    clase = 'alert alert-warning';
  } else {
     clase = 'alert alert-success'
  }

  return clase; 
}