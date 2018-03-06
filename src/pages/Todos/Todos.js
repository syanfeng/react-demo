import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo,  toggleTodo, setVisibilityFilter } from '../../store/todos/action'
import { VisibilityFilters } from "../../store/todos/action-type.js";
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'
import cs from 'classnames'
import './todos.css'

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            toggleAll: false
        }
        this.handleToggleAll = this.handleToggleAll.bind(this);
    }

    handleToggleAll(e) {
        let todoList = this.state.list;
        todoList.forEach(item => {
            item.completed = e.target.checked;
        })
        this.setState({
            list: todoList,
            toggleAll: e.target.checked
        })
    }

    render() {
        const todoList = this.state.list;
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div className="todos">
                <ol className="breadcrumb">
                    <li><Link to="/todos">Todos</Link></li>
                    <li className="active">Todos</li>
                </ol>
                <AddTodo onAddClick={text => {
                    dispatch(addTodo(text))
                }}/>
                {visibleTodos.length > 0 &&
                    <div className="todos-content">
                        <input className="toggle-all" type="checkbox" 
                            checked={this.state.toggleAll}
                            onChange={this.handleToggleAll}/>
                        <TodoList todos={visibleTodos}
                            onTodoClick={index =>
                                dispatch(toggleTodo(index))
                            }/>
                    </div>
                }
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                    } />
            </div> 
        )
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

export default connect(select)(Todos);