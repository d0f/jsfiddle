/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/react/react.d.ts" />
'use strict';

var React = require('react');

var TestTwo = React.createClass({
    render() {
        return (
            /* jshint ignore: start*/
            <h1>Hello I am TestTwo Component</h1>
            /* jshint ignore: end*/
        );
    }
});

module.exports = TestTwo;