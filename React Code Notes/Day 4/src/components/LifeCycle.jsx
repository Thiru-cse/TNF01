import React, { useEffect, useState } from 'react';

const LifeCycle = () => {
    const[value,setValue] = useState(0);

    useEffect(()=>{
        console.log('Mounting');
        return ()=>{
            console.log('Unmounting');
        }
    }, [value]) // empty render once // State -> rerender

    return (
        <div>
            <h1>LifeCycle</h1>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(value+1)}}>Click</button>
        </div>
    );
};

export default LifeCycle;