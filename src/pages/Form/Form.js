import React, { Component } from 'react';
import {
    Link 
} from 'react-router-dom'
import './form.css'

class Form extends Component {

    render() {
        return (
            <div className="form-page admin-container">
                <ol class="breadcrumb">
                    <li><Link to="/form">表单</Link></li>
                    <li class="active">Form</li>
                </ol>
            </div>
        )
    }
}

export default Form;