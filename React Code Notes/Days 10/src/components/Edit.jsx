import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({id}) => {
    const navigate = useNavigate();
    const [editData, setEditData] = useState({
        product_id:'',
        product_name: '',
        product_price: '',
        product_description: '',
    });
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        await axios
          .get(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`)
          .then((res) => setEditData(res.data))
          .catch((err) => console.log(err));
      };

      const handleChange=(e)=>{
        const {name,value}=e.target; // e.target.value e.target.name
        setEditData((preData)=>({
            ...preData, [name]: value // product: 4 => 4000
        }))
      }

      const handleFormSubmit = async(e)=>{
        e.preventDefault();
        await axios.put(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`, editData)
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))

        navigate('/products');
      }

    return (
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Edit;