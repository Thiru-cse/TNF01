import React, { useState } from 'react';
import Card from './Card';

const ConditionalRendering = ({ cartCount, setCardCount, product, setProduct}) => {

    return (
        <div>
            <h1>Conditional Component</h1>
            {product.map((item,index)=>{
            return(
                <>
                <Card item={item} setCardCount={setCardCount} />
                </>
        
            )
        })}
        </div>
    );
};

export default ConditionalRendering;