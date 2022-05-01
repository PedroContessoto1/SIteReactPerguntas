


import React from 'react';
import "./titulo.css";



function Titulo(props) {
  return (
    <div className='titulo'>
      <h1 className="text-center">{props.name}</h1>
    </div>
  );
}

export default Titulo;