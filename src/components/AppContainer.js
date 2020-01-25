import React from 'react';
import Question from './Question';
import '../index.css';


function AppContainer() {
  return (
    <div className="container">
      <header>
          <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          <Question />
        </div>
      </header>
    </div>
  );
}

export default AppContainer;
