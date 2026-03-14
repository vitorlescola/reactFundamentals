import Header from './header.jsx'  //importa o component
import Footer from './footer.jsx'
import Lista from './Lista.jsx'
import Card from './Card.jsx'
import Estudante from './Estudantes.jsx'
import UserGreeting from './UserGreeting.jsx'
import ListaRender from './ListaRender.jsx'
import Button from './Button.jsx'
import Imagem from './Imagem.jsx'
import Componente from './Componente.jsx'
import Contador from './Contador.jsx'
import Input from './Input.jsx'
import ColorPicker from './ColorPicker.jsx'
import Carros from './Carros.jsx'
import ListaUser from './ListaUser.jsx'
import CarrosArray from './CarrosArray.jsx'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import ToDoList from './Pages/ToDoList.jsx'
import Menu from './Pages/Menu.jsx'

function App() {  //adicionar outros componentes a esse
  return(  //já que o return só pode returnar um componente, tem que colocar um fragment <></> em volta dos componentes
    <>
    <Header></Header>

    <Lista></Lista>
    <hr/>

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <hr/>

    <Estudante nome="Fulano" idade={18} emAula={true}/>
    <Estudante nome="Joao" idade={19} emAula={false}/>
    <Estudante nome="Matheus" idade={20} emAula={true}/>
    <Estudante nome="Ana" idade={21} emAula={false}/>
    <hr/>

    <UserGreeting isLogin={true} usuario="Usuario123"/>
    <hr/>

    <ListaRender/>
    <hr/>

    <Button/>
    <hr/>

    <Imagem/>
    <hr/>

    <Componente/>
    <hr/>

    <Contador/>
    <hr/>

    <Input/>
    <hr/>

    <ColorPicker/>
    <hr/>

    <Carros/>
    <hr/>

    <ListaUser/>
    <hr/>

    <CarrosArray/>
    <hr/>

    <Router>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/ToDoList' element={<ToDoList/>}/>
      </Routes>
    </Router>


    <Footer></Footer>
    </>
  );
}

export default App