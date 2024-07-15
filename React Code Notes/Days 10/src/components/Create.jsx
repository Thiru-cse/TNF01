import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [editData, setEditData] = useState({
        product_id:'',
        product_name: '',
        product_price: '',
        product_description: '',
    });

      const handleChange=(e)=>{
        const {name,value}=e.target; // e.target.value e.target.name
        setEditData((preData)=>({
            ...preData, [name]: value // product: 4 => 4000
        }))
      }

      const handleFormSubmit = async(e)=>{
        e.preventDefault();
        await axios.post(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/`, editData)
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))

        navigate('/products');
      }
    return (
        <div>
            <div>
            <form onSubmit={handleFormSubmit}>
                <label>ProductId:
                <input type="text" name='product_id' value={editData.product_id} onChange={handleChange} />
                </label>
                <br/>
                <label>Product Name:
                <input type="text" name='product_name' value={editData.product_name} onChange={handleChange} />
                </label>
                <br/>
                <label>Product Price:
                <input type="text" name='product_price' value={editData.product_price} onChange={handleChange} />
                </label>
                <br/>
                <label>Product Description:
                <input type="text" name='product_description' value={editData.product_description} onChange={handleChange} />
                </label>
                <br/>
                <button type='submit'>Create</button>
            </form>
        </div>
        </div>
    );
};

export default Create;