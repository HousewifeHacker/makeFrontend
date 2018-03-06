import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

class Hello extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello');
    }
}

ReactDOM.render(React.createElement(Hello, null), document.getElementById('hello'));

