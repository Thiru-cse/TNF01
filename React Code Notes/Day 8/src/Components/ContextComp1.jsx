import React, { useContext } from 'react';
import { myContext } from '../App';

const ContextComp1 = () => {
    const [contextValue, setContextValue] = useContext(myContext);
    const handleSubmit =()=>{
        setContextValue(val=> val+1)
    }

    return (
        <div>
           <h1>Comp 1</h1>
           <h2>Context Value:{contextValue}</h2>
           <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default ContextComp1;