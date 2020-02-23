import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Matheus 2',
            counter: 0
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(){
        let state = this.state;
        state.counter += 1;
        this.setState(state)
    }

    decrease(){
        let state = this.state;
        if(state.counter ===0){return}
        state.counter--;
        this.setState(state)
    }

    render(){
        return(
            <div>
                <h3>Contador</h3>
                <button onClick={this.decrease}>-</button>
                <p>{this.state.counter}</p>
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default App;