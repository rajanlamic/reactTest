/**
 * Created by kalpana on 10/06/17.
 */
import React from 'react';

const ListComponent = (props) => (
    <ul>
        {props.items.map(function(item) {
            return (<li key={item.id}>{item.text}</li>)
        })}
    </ul>
)

export default ListComponent
