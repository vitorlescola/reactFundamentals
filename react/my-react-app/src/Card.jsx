function Card(){
    return(  //utiliza className para colocar um classe
        <div className="card">
            <img className="cardImg" src="https://placehold.co/200x200.png" alt="imagem de card"/>
            <h2 className="cardTitulo">Teste de card</h2>
            <p className="cardTexto">Cards são um componente comuns em aplicações de react</p>
        </div>  
    );
}

export default Card