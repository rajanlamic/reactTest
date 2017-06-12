/**
 * Created by kalpana on 10/06/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

const FormComponent = (handleSubmit, handleChange, text) => {
        return (<form onSubmit={e=> {
            alert(this.input.value);
            handleSubmit;
        }}>
            <input ref={input => this.input = input} onChange={handleChange} value={text}/>
            <button>Click</button>
        </form>)
}

const ListComponent = (items) => {
    return (<ul>
        {items.map(function(item) {
            return (<li key={item.id}>{item.text}</li>)
        })}
    </ul>)
}

let reducerApp = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_DO' :
            return Object.assign({}, ...state,
                {
                    id: action.id,
                    text: action.text
                }
            );
        case 'SET_TO_DO' :
            return ({
                text: action.text
            }
            );
        default:
            return state;
    }
}

let nextTodoId = 0
let AddToDo = (text) => {
    return {
        type: 'ADD_TO_DO',
        id: nextTodoId++,
        text: text
    }
}

let SetToDo = (text) => {
    return {
        type: 'SET_TO_DO',
        text: text
    }
}

let mapStateToProps = (state, props) => {
    return {
        items: state.items,
        text: state.text
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        handleSubmit: text => dispatch(AddToDo(text)),
        handleChange: text => dispatch(SetToDo(text))
    }
}

const FormComponent = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
const ListComponent = connect(mapStateToProps, mapDispatchToProps)(ListComponent);


let AppComponent = () => (
    <div>
        <FormComponent />
        <ListComponent />
    </div>
)

let store = createStore(reducerApp);

render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById("root")
);