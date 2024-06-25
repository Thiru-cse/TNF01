import React from 'react';

const StateComp = ({ setValue, value }) => {

    const handleSubmit = ()=>{
        setValue(pval=>pval+1);
    }
    return (
        <div>
            <h1>State Component: {value}</h1>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default StateComp;