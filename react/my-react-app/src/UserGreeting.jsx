//condtional rendering=permite controlar o que apareçe na aplicação com base em certas condições
function UserGreeting(props){
        if(props.isLogin){
            return <h2>Bem vindo {props.usuario}!</h2>
        }else{
            return <h2>Porfavor fazer login!</h2>
        }
}

export default UserGreeting