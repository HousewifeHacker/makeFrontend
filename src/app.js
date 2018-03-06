import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

import { Hello } from './hello.js';

class Container extends React.Component {
    render() {
        return (
            < Hello where='World' className='container' >
            </ Hello >
        )
    }
}

ReactDOM.render(< Container />, document.getElementById('hello'));

