import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SUB } from '../features/OperationSlice';

const UpdateReduxState = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Update Component</h1>
            <button onClick={()=>{dispatch(ADD(1))}}>ADD</button>
            <button onClick={()=>{dispatch(SUB(1))}}>SUB</button>
        </div>
    );
};

export default UpdateReduxState;