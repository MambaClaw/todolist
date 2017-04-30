import React, {Component} from 'react';

class Todo extends Component {
    render(){
        if(this.props.active){
            return(
                <div style = {this.props.active ? {color: 'green'} : {color: 'black'}}>
                    <h1>{this.props.fuck}</h1>
                    <h2>id: {this.props.shit}</h2>
                    <h3>{this.props.active ? 'active' : 'non-active'}</h3>
                    <button onClick={ () => this.props.activeTodo() }>ACTIVE</button>
                    <button onClick={ () => this.props.delete()}>DELETE</button>
                </div>
            )
        } else{
            return(
                <div></div>
            )
        }
    }
}

export default Todo