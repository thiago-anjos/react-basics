import React, {Component} from 'react';

// Ciclo de vida

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hour: '00:00:00',
            nextDayD: '0',
            nextDayH: '00',
            nextDayM: '00',
            nextDayS: '00'
        };
    }

    // depois que o componente é montado ele usa esse ciclo de vida abaixo, uma única vez esse cara executa
    componentDidMount(){
        setInterval(()=>{
            this.setState({hour: new Date().toLocaleTimeString()})
        },1000)
    }

    // Toda vez que atualizar alguma state
    componentDidUpdate(){

        let hourTarget = new Date("02 22, 2020 00:00:00");

        let differenceTimes = Math.abs(hourTarget - new Date()) / 1000;

        let days = Math.floor(differenceTimes / 86400);
        differenceTimes -= days * 86400
        console.log(days);

        let hours = Math.floor(differenceTimes / 3600) % 24;
        differenceTimes -= hours * 3600
        console.log(hours);

        let minutes = Math.floor(differenceTimes / 60) % 60;
        differenceTimes -= minutes * 60;
        console.log(minutes);

        let seconds = Math.floor(differenceTimes % 60);
        console.log(seconds);

        let state = this.state;
        state.nextDayD = days;
        state.nextDayH = hours;
        state.nextDayM = minutes;
        state.nextDayS = seconds;

    }

    render(){
        return(
            <div>
                <p>{this.state.hour}</p>
                <p>Faltam para o dia terminar: {this.state.nextDayD} dias / {this.state.nextDayH}:{this.state.nextDayM}:{this.state.nextDayS}</p>
            </div>
        )
    }
}

export default App;