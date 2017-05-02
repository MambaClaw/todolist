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
        {id:1, name: "pork", active: false, suggest: false},
        {id:2, name: "chicken", active: false, suggest: false},
        {id:3, name: "egg", active: false, suggest: false},
        {id:4, name: "planType1", active: false, suggest: false},
        {id:5, name: "planType2", active: false, suggest: false},
        {id:6, name: "Mushroom", active: false, suggest: false},
      ],
      dataActive: {id:0, name: "",active:true, suggest: false}
    }
  }

  makeActive(id){
    id -= 1;
    let data = this.state.dataSuggest;
    for(let i = 0 ;i<this.state.dataSuggest.length; i++){
      this.state.dataSuggest[i].active = false;
    }
    data[id].active = true;
    this.setState({
      dataActive: data[id],
      dataSuggest: data,
      showText: this.state.someText,

    })
    console.log(data[id]); 
  }

  activeTodo(index){
    let data = this.state.data;
    data[index-1].active = !data[index-1].active;
    let idActive = this.state.idActive;
    data[idActive-1].active = false;
    this.setState({
      data: data,
      idActive: index,
    })
    
  }

  addSuggest(index){
    let data = this.state.data;
    data[index-1].active = !data[index-1].active;
    this.setState({
      data: data,
    })
  }

  update(e){
    if(e.target.value[0]!=' '){
      this.setState({
        someText: e.target.value
      });
    }
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
