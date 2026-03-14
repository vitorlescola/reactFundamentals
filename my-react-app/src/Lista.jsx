function Lista(){
    const item1="Um";  //não precisa de {} se for fora do return
    const item2="Dois";
    return(
        <ul>
            <li>Zero</li>
            <li>{item1}</li>
            <li>{item2.toLocaleUpperCase()}</li>
        </ul>
    );
}

export default Lista