import React, { Component } from 'react';
import ToDo from './ToDo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      someText: 'QWEAASD',
      showText: '',
      aaa: 111,
      data: [
        {id:1, name: "nick", active: true},
        {id:2, name: "wove", active: false},
        {id:3, name: "dome", active: true}
      ]
    }
  }

  click(){
    let data = this.state.data;
    let obj = {name: this.state.someText , id: data.length + 1, active: false};
    // data.push(obj)
    this.setState({
      data: [...data, obj],
      showText: this.state.someText,
      someText: '',
    })
  }

  activeTodo(index){
    let data = this.state.data;
    data[index-1].active = !data[index-1].active;
    this.setState({
      data: data,
    })
  }

  update(e){
    this.setState({
      someText: e.target.value
    });
  
}
  render(){
    return (
      <div>
        <input
          type="text"
          value={this.state.someText}
          onChange={(e)=>this.update(e)} />
        <button onClick={ ()=> this.click() }>Click</button>
        <p>{this.state.showText}</p>
        {
          this.state.data.map((obj) => <ToDo fuck={obj.name} shit={obj.id} active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id) } key={obj.id}/>)
        }
      </div>
    )
  }
}

export default App;
