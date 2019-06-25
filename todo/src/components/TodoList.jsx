import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodo, markComplete } from '../actions/actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   console.log(this.props.todo);
    return (
      <div>
        {this.props.todo.todos.map(todo => (
          <p  
          className={`${todo.completed === true ? 'completed' : ''}`}
          onClick={ () => this.props.markComplete(todo.id)}>{todo.todo}</p>
        ))}
      </div>
    );
  }
}

const mapToStateProps = state => {
  return {
    todo: state
  };
};

export default connect(
  mapToStateProps,
  { addNewTodo, markComplete }
)(TodoList);
