require('../app/resources/stylesheets/scss/index.scss');

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);