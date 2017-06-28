import React from 'react';
import './counter.css';

export default function Subtract(props){
    return(
        <button onClick={props.onClick}>Subtract</button>
    );
}