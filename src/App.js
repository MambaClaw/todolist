import React, { Component } from 'react';
import Suggest from './Suggest'
import Active from './Active'

class App extends Component {
  constructor(){
    super();
    this.state = {
      someText: 'QWEAASD',
      showText: '',
      dataSuggest: [
        {id:1, name: "pork", active: false, suggest: true},
        {id:2, name: "chicken", active: false, suggest: true},
        {id:3, name: "egg", active: false, suggest: true},
        {id:4, name: "planType1", active: false, suggest: true},
        {id:5, name: "planType2", active: false, suggest: true},
        {id:6, name: "Mushroom", active: false, suggest: true},
      ],
      dataActive: {id:0, name: "",active:true, suggest: false}
    }
  }

  makeActive(id){
    id -= 1;
    let data = this.state.dataSuggest.map((product, i) => 
      i == id - 1 ? { ...product, active: true } : { ...product, active: false } 
    );
    this.setState({
      dataActive: data[id],
      dataSuggest: data,
      showText: this.state.someText,

    })
  }

  update(e){
      this.setState({
        someText: e.target.value
      })
  }

  render(){
    return (
      <div>
        <p>
        <input
          type="text"
          value={this.state.someText}
          onChange={(e)=>this.update(e)} />  search</p>
        <p>  id: {this.state.dataActive.id} {this.state.dataActive.name}</p>
        {
          this.state.dataSuggest.map((obj) => <Suggest name={obj.name}
          id={obj.id}
          active={obj.active}
          suggest = {obj.suggest}
          key = {obj.id}
          keyword = {this.state.someText}
          makeActive={ () => this.makeActive(obj.id) }
          />)
        }
      </div>
    )
  }
}

export default App;
