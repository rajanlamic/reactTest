/**
 * Created by kalpana on 01/01/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function FunctionalComponent() {
    return <div>Functional Component plain</div>
}

class ClassComponent extends Component {
    render() {
        return <div>Class component plain</div>
    }
}

function FunctionalComponentWithChildren(props) {
    return (<div>
            <h3>Call Funcational Compoment -- {props.name} </h3>
            <FunctionalComponent />
            <h3>Call Class Compoment -- {props.name} </h3>
            <ClassComponent />
        </div>);
}

ReactDOM.render(
    <div>
        <FunctionalComponent />
        <ClassComponent />
        <FunctionalComponentWithChildren name="call children" />
    </div>,
    document.getElementById('functionalExample'));