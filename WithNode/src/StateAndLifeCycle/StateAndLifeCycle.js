/**
 * Created by kalpana on 01/01/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class StateAndLifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    tick() {
        this.setState((prevState, props) => ({date : new Date()}));
    }

    componentDidMount() {
        this.clockId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockId);
    }

    render() {
        return <div>Current date is {this.state.date.toLocaleTimeString()}</div>
    }
}

ReactDOM.render(<StateAndLifeCycleComponent />, document.getElementById('stateAndLifeCycle'));