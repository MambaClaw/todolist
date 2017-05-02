import React, {Component} from 'react';

class Active extends Component {
    render(){
        if(this.props.data.id>0){
            return(
                <div>
                    <p>  id: {this.props.data.id} {this.props.data.name} was active  </p>
                </div>
            )
        } else{
            return(
                <div></div>
            )
        }
    }
}

export default Active