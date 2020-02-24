import React, {Component} from 'react';

class CustomForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            form:{
                name: 'Name',
                email: 'example@example.com',
                gender: 'Selecione',
                pass: '*********',
                error: ''
            }
        }
        this.dadosForm = this.dadosForm.bind(this)
    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form:form});
    }

    render(){
        return(
            <div>
                {this.state.form.error && <p>{this.state.form.error}</p>}
                <form>
                    <label>Nome:
                        <input type='text' name='name' splaceholder={this.state.form.name} value={this.state.form.name} onChange={this.dadosForm}/>
                    </label>
                    <label>E-mail:
                        <input type='email' name='email' placeholder={this.state.form.email} value={this.state.form.email} onChange={this.dadosForm}/>
                    </label>
                    <label>Sexo:
                        <select name='gender' value={this.state.form.gender}  onChange={this.dadosForm}>
                            <option>Selecione</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </select>
                    </label>
                    <label>Senha:
                        <input type='text' name='pass' placeholder={this.state.form.pass} value={this.state.form.pass}  onChange={this.dadosForm} />
                    </label>
                </form>
                <div className='form-info'></div>
                <p>{this.state.form.name}</p>
                <p>{this.state.form.email}</p>
                <p>{this.state.form.pass}</p>
                <p>{this.state.form.gender}</p>
            </div>
        )
    }
}

export default CustomForm;