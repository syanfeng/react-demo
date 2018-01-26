import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import './style/index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


registerServiceWorker();
