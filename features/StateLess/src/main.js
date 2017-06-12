import React, {Component} from 'react';
import { render } from 'react-dom';

class Stateless extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div><h1>{this.props.param}</h1>
                </div>
        );
    }
}

render(<Stateless param="sample param" />, document.getElementById("root"));