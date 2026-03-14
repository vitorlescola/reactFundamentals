import React, {useState} from "react";

function ColorPicker(){
    const [cor,setCor]=useState("#FFFFFF");

    function handleCor(e){
        setCor(e.target.value);
    }

        const style={
        fontFamily:"Arial",
        display:"flex",
        flexDirection:"column",
    }

    return(
        <div style={style}>
            <h3>Escolher cor</h3>
            <div style={{backgroundColor:cor}}>
                <p>Cor escolhida: {cor}</p>
            </div>
            <label>Selecione uma cor:</label>
            <input type="color" value={cor} onChange={handleCor}/>
        </div>
    );
}

export default ColorPicker