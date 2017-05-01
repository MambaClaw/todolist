import React, {Component} from 'react';

class Suggest extends Component {
    render(){
        let suggest = this.props.suggest;
        let length = this.props.keyword.length;
        for(let i=0 ; i<this.props.keyword.length ; i++){
            if(this.props.keyword[i]==this.props.name[i]){
                suggest = true;
            }
            else{
                suggest = false;
                break;
            }
        }
        if(suggest){
            return(
                <div style = {this.props.active ? {color: 'green'} : {color: 'black'}}>
                    <p>{this.props.name}</p>
                    <p>id: {this.props.id}</p>
                    {/*<p>{this.props.active ? 'active' : 'non-active'}</p>*/}
                    <button onClick={ () => this.props.addSuggest() }>ADD</button>
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