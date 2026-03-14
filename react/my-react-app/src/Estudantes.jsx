//props=propriedades que são compartilhadas entre componentes, parent manda valor para a child, <Componente key=valor>
//usado para mandar valores individuais para uma child
function Estudante(props){  //props é um objeto de javascript
    return(
        <div className="estudante">
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>{props.emAula?"Está em aula":"Não está em aula"}</p>
        </div>
    );
}

export default Estudante