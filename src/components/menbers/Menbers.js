import React, {Component} from 'react';
import Conditional from '../conditional'

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            login: "deslogado",
            state: 0
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(){
        this.setState({name: "thiago", login: "logado", state: 1})
    }

    logout(){
        this.setState({name: "Visitate", login: "deslogado", state: 0})
    }

    render(){
        return(
          <div>
          <h2>Bem vindo ao nosso site 2</h2> 
          <button onClick={this.login}>Clique aqui para logar</button>   
          <button onClick={this.logout}>Clique aqui para sair</button>
          {this.state.state === 1 ? 
            <Conditional name="Thiago"/> : <div> Você não está logado </div> 
           }
          </div>  
        );       
    }
}

export default Membro;