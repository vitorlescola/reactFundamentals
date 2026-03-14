import React,{useState} from "react";

function ToDoList(){
    const [tarefas,setTarefas]=useState([]);
    const [novaTarefa,setNovaTarefa]=useState("");

    function handleInput(e){
        setNovaTarefa(e.target.value);
    }

    function adicionar(){
        if(novaTarefa.trim()!==""){
            setTarefas(t=>[...t,novaTarefa]);
            setNovaTarefa("");
        }
    }

    function deletar(index){}

    function moverParaCima(index){}

    function moverParaBaixo(index){}
    return(
        <div className="lista">
            <h3>Lista de tarefas</h3>

            <div>
                <input type="text" placeholder="Insira uma tarefa" value={novaTarefa} onChange={handleInput}/>
                <button className="addBtn" onClick={adicionar}>Adicionar</button>
            </div>

            <ol>
                {tarefas.map((tarefa,index)=>{
                    <li key={index}>
                        <span className="texto">{tarefa}</span>
                        <button className="delBtn" onClick={()=>deletar(index)}>Deletar</button>
                        <button className="delBtn" onClick={()=>moverParaCima(index)}>Mover para cima</button>
                        <button className="delBtn" onClick={()=>moverParaBaixo(index)}>Mover para baixo</button>
                    </li>
                })}
            </ol>
        </div>
    );
}

export default ToDoList