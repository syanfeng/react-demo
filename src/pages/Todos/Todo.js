import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

    render() {
      return (
        <li
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}>
          
          <input className="toggle" 
                type="checkbox" 
                checked={this.props.completed} 
                onChange={this.props.onClick}/>
            <label>{this.props.text}</label>
            {/* <button className="destroy" 
                onClick={() => this.handleDel(index)}></button> */}
        </li>
      );
    }
}