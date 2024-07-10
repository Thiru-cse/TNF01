import React, { useContext } from 'react';
import { myContext } from '../App';

const ContextComp5 = () => {
    const [contextValue, setContextValue] = useContext(myContext);
    const handleSubmit = () => {
        setContextValue(val=>val+10)
    }
    return (
        <div>
            <h1>Comp 5</h1>
            <h2>Context Value:{contextValue}</h2>
           <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default ContextComp5;