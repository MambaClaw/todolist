import React, {Component} from 'react';

class Todo extends Component {
    render(){
        if(this.props.active){
            return(
                <div style = {this.props.active ? {color: 'blue'} : {color: 'black'}}>
                    <h1>{this.props.name}</h1>
                    <h2>id: {this.props.id}</h2>
                    <h3>{this.props.active ? 'active' : 'non-active'}</h3>
                    <button onClick={ () => this.props.activeTodo() }>ACTIVE</button>
                    {/*<button onClick={ () => this.props.delete()}>DELETE</button>*/}
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