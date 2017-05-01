import React, { Component } from 'react';
import ToDo from './ToDo'
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

  makeActive(data){
    if(this.state.someText != ''){
      this.setState({
        dataActive: data,
        showText: this.state.someText,
        // someText: '',
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
        {/*<button onClick={ ()=> this.add(this.state.data.length) }>Add</button>*/}
        <p>  id: {this.state.dataActive.id} {this.state.dataActive.name}</p>
        {
          this.state.dataSuggest.map((obj) => <Suggest name={obj.name}
          id={obj.id}
          active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          makeActive={ () => this.makeActive(obj.id) }
          suggest = {obj.suggest}
          idActive = {this.state.idActive}
          key = {obj.id}
          keyword = {this.state.someText}
          data={obj}
          />)
        }
      </div>
    )
  }
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


  // add(index){
  //   if(this.state.someText != ''){
  //     let data = this.state.data;
  //     let obj = {name: nameProduct , id: data.length + 1, active: true};
  //     this.setState({
  //       data: [...data, obj],
  //       showText: this.state.someText,
  //       someText: '',
  //     })
  //   }
  // }

  {/*{
          this.state.data.map((obj) => <ToDo name={obj.name}
          id={obj.id}
          active={obj.active}
          activeTodo={ () => this.activeTodo(obj.id)}
          delete={ () => this.delete(obj.id) }
          idActive = {this.state.idActive}
          key={obj.id}
          />)
        }*/}

export default App;
