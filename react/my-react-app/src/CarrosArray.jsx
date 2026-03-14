import React,{useState} from "react";

function CarrosArray(){
    const [carros,setCarros]=useState([]);
    const [carroAno,setCarroAno]=useState(new Date().getFullYear());
    const [carroFabricante,setCarroFabricante]=useState("");
    const [carroModelo,setCarroModelo]=useState("");

    function handleAdicionarCarro(){
        const novoCarro={ano:carroAno,fabricante:carroFabricante,modelo:carroModelo};
        
        setCarros(c=>[...c,novoCarro]);

        setCarroAno(new Date().getFullYear());
        setCarroFabricante("");
        setCarroModelo("");
    }

    function handleARemoverCarro(index){
        setCarros(c=>c.filter((_,i)=>i!==index));
    }

    function handleAno(e){
        setCarroAno(e.target.value);
    }

    function handleFabricante(e){
        setCarroFabricante(e.target.value);
    }

    function handleModelo(e){
        setCarroModelo(e.target.value);
    }

    return(
        <div>
            <h2>Lista de objetos carros</h2>
            <ul>
                {carros.map((carro,index)=><li key={index} onClick={()=>handleARemoverCarro(index)}>{carro.fabricante} {carro.modelo} {carro.ano}</li>)}
            </ul>

            <input type="text" value={carroFabricante} onChange={handleFabricante} placeholder="Fabricante"/><br/>
            <input type="text" value={carroModelo} onChange={handleModelo} placeholder="Modelo"/><br/>
            <input type="number" value={carroAno} onChange={handleAno}/><br/>
            <button onClick={handleAdicionarCarro}>Adicionar carro</button>
        </div>
    );
}

export default CarrosArray;