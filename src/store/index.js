import { createStore, combineReducers } from 'redux'
import todos from './todos/reducer'

const store = createStore(
    todos
)

export default store;