import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/Example2ReduxOp/ProductSlice';

const Card = () => {
    const ProductData = useSelector((state)=>state.proReducer.data)
    const status = useSelector((state)=>state.proReducer.status)
    const error = useSelector((state)=>state.proReducer.error)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])

    if(status==='loading'){
        return <div>loading......</div>
    }

    if(status==='failed'){
        return <div>Error:{error}</div>
    }

    return (
        <div>
            <h1>Card Component</h1>
            {ProductData.map((item, index)=>{
                return(
                    <>
                    <div key={index}>
                        <li>{item.product_id}</li>
                        <li>{item.product_name}</li>
                        <li>{item.product_price}</li>
                        <img src={item.product_image}/>
                        </div>
                        </>
                )
            })}
        </div>
    );
};

export default Card;