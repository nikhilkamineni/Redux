import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToDo } from '../actions';

class ToDoForm extends Component {
  state = {
    newToDo: '',
  }

  handleInput = (event) => {
    this.setState({ newToDo: event.target.value });
    console.log(this.state.newToDo);
  }

  handleSubmit = (event) => {
    this.props.addToDo(this.state.newToDo);
    this.setState({ newToDo : '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInput} value={this.state.newToDo}/>
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addToDo: addToDo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);