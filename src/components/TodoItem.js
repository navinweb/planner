import React, { Component } from 'react'
import { TodoRecord } from '../consts'

class TodoItem extends Component {
  render() {
    const { title, desc, onClickAdd, onClickRemove, first, index } = this.props
    return (
      <div>
        <input type="text" defaultValue={title} />
        <br/>
        <input type="text" defaultValue={desc} />
        <br/>
        {first ? (
          <button onClick={() => onClickAdd(new TodoRecord())}>Add</button>
        ) : (
          <button onClick={() => onClickRemove(index)}>Delete</button>
        )}
      </div>
    )
  }
}

export default TodoItem
