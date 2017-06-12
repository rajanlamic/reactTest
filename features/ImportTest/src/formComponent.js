/**
 * Created by kalpana on 10/06/17.
 */

import React from 'react';

const FormComponent = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} value={props.text}/>
        <button>Click</button>
    </form>
)

export default FormComponent
