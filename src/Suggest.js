import React, {Component} from 'react';

class Suggest extends Component {
    render(){
        let check = true;
        let checkSuggest = this.props.checkSuggest;
        for(let i in checkSuggest.length){
            if(checkSuggest[i]!=this.props.name[i]){
                check = false;
            }
        }
        if(check && !checkSuggest){
            return(
                <div style = {this.props.active ? {color: 'green'} : {color: 'black'}}>
                    <p>{this.props.name}</p>
                    <p>id: {this.props.id}</p>
                    <p>{this.props.active ? 'active' : 'non-active'}</p>
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

export default Suggest