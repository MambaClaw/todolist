import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {a: ''}
  }
  update(e){
    this.setState({a: e.target.value})
  }
  render(){
      return (
        <div>
          <input
            type="text"
            onChange={this.update.bind(this)}
            />{this.state.a}
          <button onclick="add(this.update.bind(this))"> add </button>
        </div>
      )
  }
}

export default App;
