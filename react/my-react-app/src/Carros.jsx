import React,{useState} from 'react';

function Carros(){
    const [carro,setCarro]=useState({ano:0,fabricante:"fabricante",modelo:"modelo"});  //cria um objeto js no useState

    function handleFabricante(e){
        //setCarro({...carro,fabricante:e.target.value});  //para atualizar um objeto, se não tiver o operador spread ele elimina os outos valores
        setCarro(c=>({...c,fabricante:e.target.value}));  //boa pratica, coloca o () em volta do {} para atualizar o objeto, se não o react acha que esta escrevendo códgio js
    }

    function handleModelo(e){
        setCarro(c=>({...c,modelo:e.target.value}));
    }

    function handleAno(e){
        setCarro(c=>({...c,ano:e.target.value}));
    }
    
    return(
        <div>
            <p>O seu carro favorito é : {carro.fabricante} {carro.modelo} {carro.ano}</p>
            
            <input type="text" value={carro.fabricante} onChange={handleFabricante}/><br/>
            <input type="text" value={carro.modelo} onChange={handleModelo}/><br/>
            <input type="number" value={carro.ano} onChange={handleAno}/><br/>
        </div>
    );
}

export default Carros