import React from 'react'
import '../index.css';

const Error = ({ message }) => {
  return ( 
    <p className='alert alert-danger error'>{message}</p>
   );
}
 
export default Error;