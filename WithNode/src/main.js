/**
 * Created by Rajan on 16/11/2015.
 */
var React = require("react");
var ReactDOM = require("react-dom");

var Basic = React.createClass({
   render: function () {
       return (
         <div class="basic">Basic Test </div>
       );
   }
});

ReactDOM.render(
    <Basic />,
    document.getElementById('example')
);