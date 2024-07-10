import React, { useContext } from 'react';
import { myContext } from '../../App';

const Cart = () => {
    const [data, setData] = useContext(myContext);

    const totalPrice = data.reduce((total, data)=>total + data.price * (data.quantity || 1), 0);
    return (
        <div>
            <h1>Cart Comp</h1>
            <h1>Total Quantity:1</h1>
            <h1>Total Price:200rs</h1>
            {data.map((item, index)=>{
                return(
                    <>
                    <div key={index}>
                        <li>{item.id}</li>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                        <li>{item.price}</li>
                        </div></>
                )
            })}
        </div>
    );
};

export default Cart;