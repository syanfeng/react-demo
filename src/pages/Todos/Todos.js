import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'
import cs from 'classnames'
import './todos.css'

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            toggleAll: false
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleAll = this.handleToggleAll.bind(this);
    }

    handleAdd(e) {
        if(e.keyCode === 13 && e.target.value){
            let todoList = this.state.list;
            todoList.push({
                value: e.target.value,
                completed: false
            });
            this.setState({
                list: todoList
            })
            e.target.value = '';
        }
    }

    handleDel(index) {
        let todoList = this.state.list;
        todoList.splice(index, 1);
        this.setState({
            list: todoList
        })
    }

    handleToggle(index, e) {
        let todoList = this.state.list;
        todoList[index].completed = e.target.checked;
        let checkedAll = todoList.findIndex(item => {
            return !item.completed;
        }) < 0
        this.setState({
            list: todoList,
            toggleAll: checkedAll
        })
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
        return (
            <div className="todos">
                <ol class="breadcrumb">
                    <li><Link to="/todos">Todos</Link></li>
                    <li class="active">Todos</li>
                </ol>
                <div className="todos-header">
                    <h1>todos</h1>
                    <input className="new-todo" 
                        placeholder="What needs to be done?"
                        onKeyUp={this.handleAdd} />
                </div>
                {todoList.length > 0 &&
                <div className="todos-content">
                    <input className="toggle-all" type="checkbox" 
                        checked={this.state.toggleAll}
                        onClick={this.handleToggleAll}/>
                        
                    <ul className="todo-list" >
                        {todoList.map((todo, index) => (
                            <li key={index} className={cs({'completed': todo.completed})}>
                                <input className="toggle" 
                                    type="checkbox" 
                                    checked={todo.completed} 
                                    onClick={(e) => this.handleToggle(index, e)}/>
                                <label>{todo.value}</label>
                                <button className="destroy" 
                                    onClick={() => this.handleDel(index)}></button>
                            </li>
                        ))}
                    </ul>
                </div>}
            </div> 
        )
    }
}

export default Todos;