import React, { Component } from 'react';


class Input extends Component {
    render() {
        return(
            <form onSubmit={ this.props.handleSubmit }>
            <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit" onClick={ this.props.addTodo } >Add</button>
                </span>
                <input className="form-control" onChange={ this.props.updateTodoList } value={ this.props.todo } placeholder="Add your todo" />
            </div>
        </form>
        )
    }
  }

export default Input;