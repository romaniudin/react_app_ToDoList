import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
    render() {
      const { category } = this.props
      const { todoList } = this.props
  
      let newList = todoList.filter((todo) => {
            if(category === 'active') {
                return !todo.isComplete
            } 
            else if (category === 'complete') {
                return todo.isComplete
            } 
            else {
                return true
            }
        })
       const finalTodoList=newList.map((newTodo, i) => {
       return <Todo todo={ newTodo }
       handleChange={ this.props.handleChange } key={i}
       />
      })
      return(
        <ul className="list-group">{ finalTodoList }</ul>
      ) 
  }}

export default TodoList;