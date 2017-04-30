import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return(
            <div style = {this.props.active ? {color: 'green'} : {color: 'red'}}>
                <h1>{this.props.fuck}</h1>
                <h2>id: {this.props.shit}</h2>
                <h3>{this.props.active ? 'active' : 'non-active'}</h3>
                <button onClick={ () => this.props.activeTodo() }>ACTIVE</button>
            </div>
        )
    }
}

export default Todo