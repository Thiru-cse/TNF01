import React from 'react';

const ArrayOperation = ({ setArrValue, arrvalue }) => {
    const removeArrValue = (indexPos)=>{
        setArrValue((pval)=>pval.filter((item, index)=> index !== indexPos))
    }

    const handleSubmit = () =>{
       setArrValue((pval)=>[...pval, 6]) // spread op -> [1,2,3,4,5] , 6 => [1,2,3,4,5,6];
    }
    return (
        <div>
           <h1>ArrayOperation Component</h1>
           {arrvalue.map((item, index)=>{
            return(
                <>
                <div key={index}>{item}</div>
                <button onClick={()=>{removeArrValue(index)}}>Remove</button>
                </>
            )
           })}
           <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default ArrayOperation;