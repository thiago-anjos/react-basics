import React, {Component} from 'react';
import FeedTemplate from './feed'

class Lists extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id:1, name: 'THIAGO', like: 1, comments:20},
                {id:2, name: 'Raquel', like: 100, comments: 200},
                {id:3, name: "rodrigo", like:1000, comments:20000}
            ]
        }
    }

    render(){
        return(
            <ul>
                {this.state.feed.map( (item) => {
                    return(
                        <FeedTemplate key={item.id} name={item.name} like={item.like} comments={item.comments}/>
                    )
                })}
            </ul>
        )
    }
}

export default Lists;