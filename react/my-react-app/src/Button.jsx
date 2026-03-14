//click event
function Button(){
    //const handleClick=()=>console.log("clicado");
    //const handleClick2=(teste)=>console.log(`${teste}`);
    let contador=0;
    const handleClick=(e,nome)=>{  //e=event argument, é dado automaticamente, sendo um objeto que descreve o evente ocorrido
        if(contador<3){
            contador++;
            console.log(`${nome} cliclou ${contador} vezes!`);
        }else{
            contador++;
            console.log(`${nome} cliclou ${contador} vezes!, \nNovo recorde!`);
        }
            console.log(e);
            e.target.textContent=`Clique em mim!\n${contador}`;  //target é onde foi clicado, onDoubleClick para dois cliques
    }

    return(
        <button onClick={(e)=>handleClick(e,"Usuario")}>Clique em mim!</button>
        //<button onClick={()=>handleClick2("j")}>Clique em mim!</button>  //se tiver um argumento precissa de um callback/arrow
    );
}

export default Button