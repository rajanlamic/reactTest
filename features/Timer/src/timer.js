/**
 * Created by kalpana on 10/06/17.
 */

import React from 'react';
import { render } from 'react-dom';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timeElapsed: 0}
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState((prevState) => ({
            timeElapsed: prevState.timeElapsed + 1
        }));
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (<div>{this.state.timeElapsed}</div>)
    }
}

render(<Timer />, document.getElementById("root"));