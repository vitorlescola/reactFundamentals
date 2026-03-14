import Header from './header.jsx'  //importa o component
import Footer from './footer.jsx'
import Lista from './Lista.jsx'

function App() {  //adicionar outros componentes a esse
  return(  //já que o return só pode returnar um componente, tem que colocar um fragment <></> em volta dos componentes
    <>
    <Header></Header>

    <Lista></Lista>

    <Footer></Footer>
    </>
  );
}

export default App
