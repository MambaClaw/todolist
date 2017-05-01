import React, { Component } from 'react';
import ToDo from './ToDo'
import Suggest from './Suggest'

class App extends Component {
  constructor(){
    super();
    this.state = {
      someText: 'QWEAASD',
      showText: '',
      idActive: 0,
      dataSuggest: [
        {id:1, name: "pork", active: false, suggest: false},
        {id:2, name: "chicken", active: false, suggest: false},
        {id:3, name: "egg", active: false, suggest: false},
        {id:4, name: "planType1", active: false, suggest: false},
        {id:5, name: "planType2", active: false, suggest: false},
        {id:6, name: "Mushroom", active: false, suggest: false},
      ],
      data:[]
    }
  }

  add(index){
    if(this.state.someText != ''){
      let data = this.state.data;
      let obj = {name: this.state.someText , id: data.length + 1, active: true};
      this.setState({
        data: [...data, obj],
        showText: this.state.someText,
        someText: '',
      })
    }
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

  // delete(index){
  //   let data = this.state.data;
  //   data[index-1].active = !data[index-1].active;
  //   this.setState({
  //     data: data,
  //   })
  // }

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
    if(e.target.value[0]!=' '){
      this.setState({
        someText: e.target.value
      });
    }
    /*{
          this.state.dataSuggest.map((obj) => <search name={obj.name}
          id={obj.id}
          active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          suggest = {obj.suggest}
          key = {obj.id}
          keyword = {this.state.someText}
          />)
    }*/
  }

  // search(index){
  //   for(var i=0 ; i<keyword.length ; i++){
  //     if(keyword[i]!=name[i]){
  //       suggest = false;
  //     }
  //   }
  //   this.setState({
  //       dataSuggest[index-1].suggest : suggest,  
  //     });
  // }

  render(){
    return (
      <div>
        <input
          type="text"
          value={this.state.someText}
          onChange={(e)=>this.update(e)} />
        <button onClick={ ()=> this.add(this.state.data.length) }>Add</button>
        <h1>{this.state.data.length} items add</h1>
        {
          this.state.dataSuggest.map((obj) => <Suggest name={obj.name}
          id={obj.id}
          active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          suggest = {obj.suggest}
          idActive = {this.state.idActive}
          key = {obj.id}
          keyword = {this.state.someText}
          />)
        }
        {
          this.state.data.map((obj) => <ToDo name={obj.name}
          id={obj.id}
          active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          idActive = {this.state.idActive}
          key={obj.id}
          />)
        }
      </div>
    )
  }
}

export default App;
