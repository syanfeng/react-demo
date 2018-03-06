import React, {  Component } from 'react';

export default class AddTodo extends Component {
    render() {
      return (
        <div className="todos-header">
            <h1>todos</h1>
            <input ref="input" className="new-todo" 
                placeholder="What needs to be done?"
                onKeyUp={e => this.handleClick(e)} />
        </div>
      );
    }
  
    handleClick(e) {
        if(e.keyCode === 13 && e.target.value){
            const node = this.refs.input;
            const text = node.value.trim();
            this.props.onAddClick(text);
            node.value = '';
        }
    }
}

// AddTodo.propTypes = {
//     onAddClick: PropTypes.func.isRequired
// }