import React from 'react';

const CompC = ({ arrObj }) => {
    return (
        <div>
            <h1>Component C</h1>
            {arrObj.map((item, index)=>{
                return (
                    <>
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h1>{item.name}</h1>
                        <h1>{item.designation}</h1>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default CompC;