import React, {Component} from 'react';
import Lists from '../lists';
import Form from '../forms';
import CustomForm from '../forms/customForm'

class Condition extends Component{
    render(){
        return(
            <div>Olá {this.props.name} essa é uma área logada do nosso site. Fique a vontade para apreciar
            <Lists/>
            <Form/>
            <CustomForm/>
            </div>
        )
    }
}

export default Condition;