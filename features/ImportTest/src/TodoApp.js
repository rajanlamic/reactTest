/**
 * Created by kalpana on 10/06/17.
 */

import React from 'react';
import { render } from 'react-dom';
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {text: '', items: []};
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    render() {
        return(
            <div>
                <FormComponent text={this.state.text} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <ListComponent items={this.state.items} />
            </div>
        )
    }
}



render(<AppComponent />, document.getElementById("root"));