import React from 'react';

const PropsComp = ({ a }) => {
    const handleSubmit =()=>{
        a=a+1;
        console.log(a);
    }

    return (
        <div>
            <h1>Props Component value: {a}</h1>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default PropsComp;