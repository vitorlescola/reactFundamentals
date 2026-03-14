import React, {useState} from 'react';

function Contador(){
    const [quant,setQuant]=useState(0);

    const incrementar=()=>{
        //setQuant(quant+1);  funciona mais é boa pratica utilizar um updater function
        setQuant(q=>q+1);  //q representa o estado anterior de quant
    }

    const decrementar=()=>{
        setQuant(q=>q-1);
    }

    const resetar=()=>{
        setQuant(0);
    }

    const styleContainer={
        textAling:"center",
        fontFamily:"Arial",
        marginLeft:"150px",
        fontSize:"3em",
        marginTop:"5px",
        marginBottom:"5px",
    }

    return(
        <div>
            <p style={styleContainer}>{quant}</p>
            <button onClick={incrementar}>Aumentar</button>
            <button onClick={decrementar}>Diminuir</button>
            <button onClick={resetar}>Resetar</button>
        </div>
    );
}

export default Contador