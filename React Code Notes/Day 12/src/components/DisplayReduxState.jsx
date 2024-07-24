import React from 'react';
import { useSelector } from 'react-redux';

const DisplayReduxState = () => {
    const operationStateValue = useSelector((state)=>state.opReducer.value) //fetch state value from the reducer
    return (
        <div>
            <h1>Display Component</h1>
            <p>State Value: {operationStateValue}</p>
        </div>
    );
};

export default DisplayReduxState;