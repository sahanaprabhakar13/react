import React from 'react';
import { render } from '@testing-library/react';

const person = (props) => {
    
    
    return(
        <div>
            <p onClick={props.click}>Happy Birthday {props.name} and {props.gender} turns {props.age} years</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    
    )
    
};

export default person;
