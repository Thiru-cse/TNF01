import React from 'react';
import "./Styles/CompA.css"

const CompA = ({a, arr}) => {
    const handleSubmit = () =>{
        alert("React Day 1 - TNF01")
    }
    return (
        <div className='heading'>
            <h1>Component A - {a}</h1>
            <button onClick={handleSubmit}>Click</button>
            {arr.map((item, index)=>{
                return(
                    <>
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default CompA;