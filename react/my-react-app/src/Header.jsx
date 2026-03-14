//jsx=JavaScriptXml
//import {HashRouter as Router,Routes,Route} from 'react-router-dom';  //baixar a biblioteca react-router-dom para criar varias paginas

function Header(){  //maiusculo
    return(  //retorna o html, react components só retorna um elemento+mais as crianças
            <header>
                <h1>Meu site</h1>

                <nav>
                    <ul>
                        <li><a href="#">Casa</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
                <hr/>
        </header>
    );//já vem com css padrão do index.css, pode ser altterado e/ou removido
}

export default Header  //exporta para poder usar um outro lugar