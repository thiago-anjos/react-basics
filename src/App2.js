import React, { Component } from "react"

// componentes de classe
class Team extends Component{
    render(){
        return(
            <div className="team">
                <h2>Olá sou o {this.props.name}</h2>
                <About job={this.props.job} age={this.props.age}/>
                <Social fb={this.props.facebook}/>
            </div>
        );
    }
}

class About extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Cargo: {this.props.job}</li>
                    <li>Idade: {this.props.age}</li>
                </ul>
            </div>
        )
    }
}

const Social = (props) =>{
    return(
        <ul className="social">
            <li><a href={props.fb} target="_blank">Facebook</a></li>
            <li>Instagram</li>
        </ul>
    )
}

function App(){
    return(
        <div>
                <h2>Olá eu sou uma classe e um componente</h2>
                <Team name="thiago" job="programador" age="33" facebook="https://www.facebook.com"/>
                <Team name="Raquel" job="Técnica em Enfermagem" age="30" facebook="https://www.facebook.com"/>
        </div>
    );
}

export default App;