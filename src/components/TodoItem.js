import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TYPE } from '../consts'
import styled from 'styled-components';

const Title = styled.input`
  font-size: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 2px;
  margin-bottom: 2px;
  outline: none;
  width: 350px;
`

const Desc = styled.input`
  font-size: 16px;
  color: gray;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 2px;
  margin-bottom: 2px;
  outline: none;
  width: 350px;
`

class TodoItem extends Component {
  render() {
    const {
      title,
      desc,
      addTodo,
      removeTodo,
      updateTodo,
      index
    } = this.props

    const first = index === 0;

    return (
      <div>
        <div>{index}</div>
        <Title
        type = "text"
        defaultValue = {title}
        onChange={(e) => {
          updateTodo({
            index,
            value: e.target.value,
            field: 'title',
          })}
        }
        />
        <br/>
        <Desc
          defaultValue={desc}
          onChange={(e) => {
            updateTodo({
              index,
              value: e.target.value,
              field: 'desc',
            })
          }}
        />
        <br/>
        {first ? (
          <button onClick={addTodo}>Add</button>
        ) : (
          <button onClick={() => removeTodo(index)}>Delete</button>
        )}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['todos', ownProps.index, 'title']),
    desc: state.getIn(['todos', ownProps.index, 'desc'])
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
    updateTodo: (payload) =>
      dispatch({
        type: TYPE.UPDATE_TODO,
        payload
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
