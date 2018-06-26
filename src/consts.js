import { Record, List } from 'immutable'

export const TodoRecord = Record({
  title: 'Title',
  desc: 'Desc',
  deadLine: '',
  priority: '',
  finished: '',
})

export const StateRecord = Record({
  todos: List([new TodoRecord()]),
  filter: null
})

export const TYPE = {
  ADD_TODO: 'ADD TODO',
  REMOVE_TODO: 'REMOVE TODO'
}
