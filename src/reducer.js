import { TYPE } from './consts'

function reducer(state, action) {
  switch (action.type) {
    case TYPE.ADD_TODO:
      console.log('ADD')
      return state.update('todos', todos => todos.insert(0, action.payload))

    case TYPE.REMOVE_TODO:
      console.log('REMOVE')
      return state.update('todos', todos => todos.remove(action.payload))

    default:
      return state
  }
}

export default reducer
