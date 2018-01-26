import { createStore, combineReducers, applyMiddleware } from 'redux'
import todos from './todos/reducer'

const store = createStore(
    combineReducers({...todos})
)

export default store;