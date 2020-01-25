import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';
import Button from "./components/Button";

ReactDOM.render(
    <div>
        <h1>Calculadora<br/> do<br/> Jeff</h1>
        <Calculator />
    </div>


    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();