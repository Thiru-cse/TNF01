import React, { useContext } from 'react';
import { myContext } from '../App';
import ContextComp3 from './ContextComp3';

const ContextComp2 = () => {
    const [contextValue, setContextValue] = useContext(myContext);
    const handleSubmit =()=>{
        setContextValue(val=> val-1)
    }
    return (
        <div>
            <h1>Comp 2</h1>
            <h2>Context Value:{contextValue}</h2>
            <button onClick={handleSubmit}>Click</button>
            <ContextComp3/>
        </div>
    );
};

export default ContextComp2;