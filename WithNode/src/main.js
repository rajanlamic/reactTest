/**
 * Created by Rajan on 16/11/2015.
 */


//var React = require("react");
//var ReactDOM = require("react-dom");


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BasicComp extends Component {
    render() {
        return <div>{this.props.name}</div>
    }
}

/*
var Basic = React.createClass({
   render: function () {
       return (
         <div class="basic">Basic Test </div>
       );
   }
});
*/

ReactDOM.render(
    <BasicComp name="testing...." />,
    document.getElementById('example')
);