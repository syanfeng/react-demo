import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'

import Header from '../components/Header/Header'
import Home from './Home/Home'
import Todos from './Todos/Todos'
import Form from './Form/Form'

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author:{
        name: 'Mr Jone'
      }
    };
  }

  handleCollapseClick(e) {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
            <div className="s-container admin-main"> 
                <div className="admin-sidebar s-offcanvas">
                    <div className="s-offcanvas-bar">
                        <ul className="s-list admin-sidebar-list">
                            <li><Link to="/" ><i className="icon-font icon-home" /> Home</Link></li>
                            <li><Link to="/todos" >ToDos</Link></li>
                            <li className="admin-parent">
                                <a href="javascript:;" data-s-collapse="{target: '#collapse-nav'}"
                                    onClick={this.handleCollapseClick.bind(this)} >Components</a>
                                <ul className="s-list admin-sidebar-sub s-collapse s-in" id="collapse-nav">
                                    <li><Link to="/" >Dropdown</Link></li>
                                    <li><Link to="/form" >Form</Link></li>
                                </ul>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div className="admin-content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/todos" component={Todos}/>
                    <Route path="/form" component={Form}/>

                </div>
            </div>
        </Router>
      </div>
    );
  }
}



export default App;
