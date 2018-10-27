import React, { Component } from 'react';

class Todo extends Component {
    render() {
      return( 
        <li className="list-group-item">
              <input type="checkbox" checked={ this.props.todo.isComplete } onChange={()=> this.props.handleChange(this.props.todo.id)} 
              />
              <label className={ this.props.todo.isComplete ? 'done' : ''} >{ this.props.todo.name }</label>
        </li>
      )
    }}

export default Todo;