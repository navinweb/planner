import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class App extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        sup
        {this._renderTodos(todos)}
      </div>
    )
  }

  _renderTodos(todos) {
    return <ul>{todos.map((todo, index) => (
      <li key={todo.get('id')}>
        <TodoItem index={index} />
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
  return {}
}

export default connect(mapToStateProps, mapDispatchToProps)(App)
