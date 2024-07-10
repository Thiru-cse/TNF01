import React, { useContext } from 'react';
import { myContext } from '../App';
import ContextComp4 from './ContextComp4';

const ContextComp3 = () => {
    const [contextValue, setContextValue] = useContext(myContext);
    return (
        <div>
           <h1>Comp 3</h1>
           <h2>{contextValue}</h2>
           <ContextComp4/>
        </div>
    );
};

export default ContextComp3;