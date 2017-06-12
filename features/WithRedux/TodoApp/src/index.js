/**
 * Created by kalpana on 10/06/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

let input;


//const ListComponent = ({items}) => {
//
//    console.log('items', items);
//    return (<ul>
//        {
//            items.map(function(item) {
//            return (<li key={item.id}>{item.text}</li>)
//        })}
//    </ul>)
//}

const FormComponent = ({handleSubmit, items}) => {

        return (<div><form onSubmit={
            (e) =>  {
                e.preventDefault();
                handleSubmit(input.value);
                input.value = '';
            }
        }>
            <input ref={node => {input = node}} />
            <button>Click</button>
        </form>
                <ul>
                    {
                        items.map(function(item) {
                            return (<li key={item.id}>{item.text}</li>)
                        })}
                </ul>
            </div>
        )
}


let reducerApp = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_DO' :
                return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
        case 'SET_TO_DO' :
            return ({
                text: action.text
            }
            );
        default:
            return state;
    }
}

let nextTodoId = 0;
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
        id: nextTodoId++,
        text: text
    }
}

let mapStateToProps = (state, props) => {
    return {
        items: state
    }
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        handleSubmit: text =>
        {
            dispatch(AddToDo(text))
        },
    }
}

const FormComponentContainer = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
//const ListComponentContainer = connect(mapStateToProps, mapStateToProps)(ListComponent);


let AppComponent = () => (
    <div>
        <FormComponentContainer />
    </div>
)

let store = createStore(reducerApp);

render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById("root")
);