function Imagem(){
    const imgUrl='https://placehold.co/200x200.png';
    const handleClick=(e)=>{
        console.log("a");
        e.target.style.display="none";
    }

    return(
        <img onClick={(e)=>handleClick(e)} src={imgUrl} alt="Imagem 200x200"/>
    );
}

export default Imagem