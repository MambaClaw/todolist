import React, { Component } from 'react';
import ToDo from './ToDo'
import Suggest from './Suggest'

class App extends Component {
  constructor(){
    super();
    this.state = {
      someText: 'QWEAASD',
      showText: '',
      aaa: 111,
      dataStock: [
        {id:1, name: "หมู", active: false, suggest: true},
        {id:2, name: "ไก่", active: false, suggest: true},
        {id:3, name: "ไข่", active: false, suggest: true},
        {id:4, name: "พืชยืนต้น", active: false, suggest: true},
        {id:5, name: "พืชไม่ยืนต้น", active: false, suggest: true},
        {id:6, name: "เห็ด", active: false, suggest: true},
      ],
      data:[]
    }
  }

  add(index){
    let data = this.state.data;
    let obj = {name: this.state.someText , id: data.length + 1, active: true};
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

  delete(index){
    let data = this.state.data;
    data[index-1].active = !data[index-1].active;
    this.setState({
      data: data,
    })
  }

  // delete(index){
  //   let data = this.state.data;
  //   let newData;
  //   var j=0;
  //   for(var i=0 ; i<data.length ;i++){
  //     if(i=index-1){
  //       j++;
  //     }
  //     newData[j] = data[i];
  //   }
  //   this.setState({
  //     data: newData,
  //   })
  // }

  // update(e){
  //   this.setState({
  //     someText: e.target.value
  //   });
  // }

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
        {
          this.state.dataStock.map((obj) => <Suggest name={obj.name} suggest={obj.suggest}
          id={obj.id}
          active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          checkSuggest = {this.state.someText}
          key={obj.id}
          />)
        }
        <button onClick={ ()=> this.add(this.state.data.length}>Add</button>
        {
          this.state.data.map((obj) => <ToDo name={obj.name} id={obj.id} active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          key={obj.id}
          />)
        }
        <b1>{this.state.data.length} items left</b1>

      </div>
    )
  }
}

export default App;
