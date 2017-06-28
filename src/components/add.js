import React from 'react';
import './counter.css';

export default function Add(props){
    return(
        <button onClick={props.onClick}>Add</button>
    );
}