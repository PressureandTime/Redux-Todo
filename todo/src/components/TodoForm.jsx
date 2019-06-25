import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodo, markComplete } from '../actions/actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="todo"
          onChange={this.onChangeHandler}
          value={this.state.todo}
        />
        <button>Add</button>
      </form>
    );
  }
}

const mapToStateProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(
  mapToStateProps,
  { addNewTodo, markComplete }
)(TodoForm);
