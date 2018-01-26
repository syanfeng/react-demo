import React, { Component } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown'
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom'
import './home.css'
const options = [
    'one', 'two', 'three'
]
class Home extends Component {

    constructor(props) {
        super(props);

        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect(option) {
        alert(JSON.stringify(option));
    }

    render() { 
        return (
            <div className="admin-home">
                <ol class="breadcrumb">
                    <li><Link to="/">首页</Link></li>
                    <li class="active">Home</li>
                </ol>
                <Dropdown options={options} onChange={this._onSelect} placeholder="Select an option"/>
            </div>
        )
    }
}

export default Home;