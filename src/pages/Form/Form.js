import React, { Component } from 'react';
import {
    Link 
} from 'react-router-dom'
import './form.css'
// 复制插件
import Clipboard from 'clipboard';
const clipboard = new Clipboard('.btn-copy');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
 
    e.clearSelection();
});
clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

class Form extends Component {

    componentDidMount() {
        const btn = document.querySelector('#btn');
        // btn.addEventListener('click', () => {
        //     const input = document.querySelector('#demoInput');
        //     input.select();
        //     if (document.execCommand('copy')) {
        //         document.execCommand('copy');
        //         console.log('复制成功');
        //     }
        // })
        btn.addEventListener('click',() => {
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('readonly', 'readonly')      // 防止ios键盘拉起
            input.setAttribute('value', '听说你想复制我 哈哈哈');
            input.select();
            // input.setSelectionRange(0, 9999); // 兼容ios
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                console.log('复制成功');
            }
            document.body.removeChild(input);
        })
    }

    render() {
        return (
            <div className="form-page admin-container">
                <ol className="breadcrumb">
                    <li><Link to="/form">表单</Link></li>
                    <li className="active">Form</li>
                </ol>
                <input id="demoInput" />
                <button className="btn-copy" data-clipboard-target="#demoInput">点我复制</button>
                <br/>
                <button id="btn">点我复制</button>
            </div>
        )
    }
}

export default Form;