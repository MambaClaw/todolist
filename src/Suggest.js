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
                    <p><button onClick={ ()=> this.props.makeActive(this.props.data) }>ACTIVE</button>  id:{this.props.id}  {this.props.name}
                    </p>
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