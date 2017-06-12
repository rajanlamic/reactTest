/**
 * Created by kalpana on 10/06/17.
 */

import React from 'react';
import { render } from 'react-dom';

class FormComponent extends React.Component {
    render() {
        return (<form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleChange} value={this.props.text}/>
            <button>Click</button>
        </form>)
    }
}

class ListComponent extends React.Component {

    render() {
        return (<ul>
            {this.props.items.map(function(item) {
                return (<li key={item.id}>{item.text}</li>)
            })}
        </ul>);
    }
}

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