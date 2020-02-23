import React, {Component} from 'react';

class CustomForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'nome@email.com',
            pass: ''
        }
        this.changeEmail = this.changeEmail.bind(this)
    }

    changeEmail(e){
        let valueTyped = e.target.value;
        this.setState({email: valueTyped})
    }


    render(){
        return(
        <div>
            <form>
                <label>First name:
                    <input type='text' placeholder="Nome"/>
                </label>
                <label>First name:
                    <input type='email' placeholder="E-mail" value={this.state.email} onChange={this.changeEmail}/>
                </label>
                <label>First name:
                    <input type='password' placeholder="Senha" value={this.state.pass} 
                        onChange={(e)=> this.setState({pass: e.target.value})}/>
                </label>
            </form>
            <p>{this.state.email}</p>
            <p>{this.state.pass}</p>
        </div>
        )
    }
}

export default CustomForm;