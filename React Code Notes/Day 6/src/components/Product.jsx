import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('productdetail');
    }

    return (
        <div>
            <h1>Product Page</h1>
            <button onClick={handleSubmit}>Product Detail</button>
            <nav>
                <Link to='productdetail'>Product Detail</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Product;<h1>Product</h1>