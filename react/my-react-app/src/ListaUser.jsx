import React,{use, useState} from "react";

function ListaUser(){
    const [itens,setItens]=useState([]);  //vetor vazio

    function handleAdicionarItem(){
        const novoItem=document.getElementById("itemInput").value;
        document.getElementById("itemInput").value="";
        setItens(i=>[...i,novoItem])
    }

    function handleRemoverItem(index){
        setItens(itens.filter((_,i)=>i!==index));
    }

    const styles={
        marginTop:"0",
        marginBottom:"0",
    }

    return(
        <div>
            <h2>Lista de itens</h2>
            <h6 style={styles}>Clique em um item para removelo</h6>
            <ul>
                {itens.map((item,index)=><li key={index} onClick={()=>handleRemoverItem(index)}>{index+1}: {item}</li>)}
            </ul>
            <input type="text" id="itemInput" placeholder="Insira um item"/>
            <button onClick={handleAdicionarItem}>Adicionar item</button>
        </div>
    );
}

export default ListaUser;