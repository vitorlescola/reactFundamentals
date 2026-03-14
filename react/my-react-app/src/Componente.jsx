//React hook=funçao especial que permite que componentes utilizar react features, sem escrever class components (use...)
//useState()
import React,{useState} from 'react';  //importa somente o useState
function Componente(){
    const [nome,setNome]=useState("Visitante");  //useState() retorna um vetor com dois elementos, uma variavel e uma setter 
                                                 // function, pode não passar nada () e pode passar um estado inicial ("aaa")
    const [idade,setIdade]=useState(0);

    const uptadeNome=()=>{
       setNome("Fulano");  //quando usa setNome, f=o virtual dom atualiza automaticamente
    }
    const uptadeIdade=()=>{
        setIdade(idade+1);
    }
    
    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <button onClick={uptadeNome}>Set Nome</button>
            <button onClick={uptadeIdade}>Incrementar Idade</button>
        </div>
    );
}

export default Componente