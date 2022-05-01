
import React from 'react';
import "./pergunta.css"


function Perguntas(props) {
    return (
        <>
            <div className='card'>
                <div className='img_direita'>
                    <img src={props.foto} alt={props.pergunta} width="400" height="200"/>
                </div>
                <div className='textes'>
                    <div className='container'>
                        <h3>{props.pergunta}</h3>
                    </div>
                    <div className='container'>
                        <div style={{color: "blue"}}>{props.respostas}</div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Perguntas;