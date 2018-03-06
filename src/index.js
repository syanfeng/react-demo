import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import './style/index.css'

import { addTodo, toggleTodo, setVisibilityFilter } from './store/todos/action'
import { VisibilityFilters } from "./store/todos/action-type.js";

console.log(store.getState())

// let unsubscribe = store.subscribe(() => {
//   console.log('----------update----------')
//   console.log(store.getState())
// })
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


registerServiceWorker();
