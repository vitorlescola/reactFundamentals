function ListaRender(){
    //const itens=["Primerio item","Segundo item","Terceiro item","Quarto item","Quinto item"];
    const itens=[{id:1,nome:"Primerio item",imparPar:"impar"},  //coloca entre {} para tornar em objeto
                 {id:2,nome:"Segundo item",imparPar:"par"},
                 {id:3,nome:"Terceiro item",imparPar:"impar"},
                 {id:4,nome:"Quarto item",imparPar:"par"},
                 {id:5,nome:"Quinto item",imparPar:"impar"}];
                 
    const listaItens=itens.map(item=> <li key={item.id}>
        {item.nome},&nbsp;
        <b>{item.imparPar}</b></li>);  //usa o .map() para separar cada item em uma <li>, todo item deve ter uma key unica(id),&nbsp; para adicionar espaço

    return(
        <ul>{listaItens}</ul>
    );
}
//pode ser usado como props
export default ListaRender