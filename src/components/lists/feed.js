import React, {Component} from 'react';

class Feed extends Component{
    render(){
        return(
            <li key={this.props.id}>
                Nome: {this.props.name} <br/>
                {this.props.like > 1 ? this.props.like + ' Curtidas' : this.props.like + ' Curtida'} <br/>
                {this.props.comments > 1 ? this.props.comments + ' Comentários' : this.props.comments + ' Comentário'} <br/><br/>
            </li>
        );
    }
}

export default Feed;