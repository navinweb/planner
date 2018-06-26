import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TYPE } from '../consts'
import TodoItem from './TodoItem'

class App extends Component {
  render() {
    const { todos, addTodo, removeTodo } = this.props
    return (
      <div>
        sup
        {this._renderTodos(todos, addTodo, removeTodo)}
      </div>
    )
  }

  _renderTodos(todos, addTodo, removeTodo) {
    return <ul>{todos.map((todo, index) => (
      <li key={index}>
        <TodoItem
          title={todo.get('title')}
          desc={todo.get('desc')}
          onClickAdd={addTodo}
          onClickRemove={removeTodo}
          first={index === 0}
          index={index}
        />
      </li>
    ))}</ul>
  }
}

function mapToStateProps(state) {
  return {
    todos: state.get('todos'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (payload) =>
      dispatch({
        type: TYPE.ADD_TODO,
        payload,
      }),
    removeTodo: (payload) =>
      dispatch({
        type: TYPE.REMOVE_TODO,
        payload,
      }),
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(App)
