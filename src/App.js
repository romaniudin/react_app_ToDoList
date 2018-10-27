import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input'
import TodoList from './Components/TodoList'


class App extends Component {
  constructor(){
    super() 
      
      this.state = {
        todoList: [],
        todo:'',
        id: 0,
        category: 'all'
      }
  }

  updateTodoList = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault()
    this.setState({
      todoList: [{name: this.state.todo, id: this.state.id, isComplete: false}].concat(this.state.todoList),
      todo: [],
      id: this.state.id + 1
    })
  }

  handleSubmit =(e) => {
    this.addTodo.Todo()
    this.updateTodoList()
  }

  handleChange = (id) => {
    let updatedList = this.state.todoList
   for (let i=0; i<updatedList.length; i++) {
     if(id === updatedList[i].id) {
       if(updatedList[i].isComplete === false) {
      updatedList[i].isComplete = true
     }
      else {
      updatedList[i].isComplete = false
     }
    }} 
   this.setState({
     todoList: updatedList
   })
  } 

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.isComplete)
    })
  }

  showStatus = (e) => {
    this.setState({
      category: e.target.value
    })  
  }

  render() {
    return (
      <div className="App">
       <div className="container">
        <h1 className="text-center">Cute TO-DO list</h1>
        <Input todo = { this.state.todo }
            updateTodoList = { this.updateTodoList }
            addTodo = { this.addTodo }/>
        <TodoList todo={ this.state.todo }
            todoList={ this.state.todoList }
            handleChange={ this.handleChange }
            category={ this.state.category } />
        <select value={ this.state.category } onChange={ this.showStatus }>
            <option value="all">all</option>
            <option value="active">active</option>
            <option value="complete">complete</option>
        </select>
        <button className="pull-right btn btn-default" onClick={ this.clearCompleted } >Clear Complete</button>
        </div>
      </div>
    );
  }
}

export default App;
