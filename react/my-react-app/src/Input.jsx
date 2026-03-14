//onChange=usado principalmente em input,textarea,select,radio... Chama uma função toda a vez que o valor do input muda

import React, {useState} from 'react';

function Input(){
    const [nome,setNome]=useState("");
    const [quantidade,setQuantidade]=useState(0);
    const [texto,setTexto]=useState("");
    const [pagamento,setPagamento]=useState("");
    const [radio,setRadio]=useState("");

    function handleNome(e){
        setNome(e.target.value);
    }

    function handleQuantidade(e){
        setQuantidade(e.target.value);
    }

    function handleTexto(e){
        setTexto(e.target.value);
    }

    function handlePagamento(e){
        setPagamento(e.target.value);
    }

    function handleRadio(e){
        setRadio(e.target.value);
    }

    return(
        <div>
            <input value={nome} type="text" onChange={handleNome}/>
            <p>Nome: {nome}</p>

            <input value={quantidade} type="number" onChange={handleQuantidade} min={0}/>
            <p>Quantidade: {quantidade}</p>

            <textarea value={texto} onChange={handleTexto} placeholder="Insira um comentario"/>
            <p>Comentario: {texto}</p>

            <select value={pagamento} onChange={handlePagamento}>
                <option value="">Escolha uma opção</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Pix">Pix</option>
            </select>
            <p>Pagamento {pagamento}</p>

            <label>
                <input type="radio" value="A" checked={radio==="A"} onChange={handleRadio}/>
                A
            </label>
            <br/>
            <label>
                <input type="radio" value="B" checked={radio==="B"} onChange={handleRadio}/>
                B
            </label>
            <p>Opção: {radio}</p>
        </div>
    );
}

export default Input