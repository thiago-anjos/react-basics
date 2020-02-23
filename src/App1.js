import React from 'react';

// componente básico sem estado
const WelcomeText = (props) => {
    return(
        <div className="bem-vindo">
            <h6>Esse é um componente sem estado</h6>
            <p>Olá {props.name}, você tem {props.age} anos de idade</p>
        </div>
    )
}

// componente por montar equipe 
const Team = (props) =>{
    return (
        <div className="team">
            <About name={props.name} job={props.job} age={props.age} />
            <Social fb={props.facebook} insta={props.instagram}/>
        </div>
    )
}

// um componente específico sobre a pessoa
const About = (props) =>{
    return (
        <div>
            <h2>Olá sou o {props.name}</h2>
            <ul>
                <li>Job: {props.job}</li>
                <li>Age: {props.age}</li>
            </ul>
        </div>
    )
}

const Social = (props) =>{
    return (
        <div>
            <h5>Minhas redes sociais</h5>
            <ul>            
                <li><a href={props.fb}>Facebook</a></li>
                <li><a href={props.insta}>Instagram</a></li>
            </ul>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Team name="Matheus" job="Full Stack" age="23" facebook="http://www.facebook.com"  instagram="https://www.instagram.com"/>
            <Team name="Lucas" job="Front End" age="33" facebook="http://www.facebook.com" instagram="https://www.instagram.com"/>
        </div>
    )
}

export default App;