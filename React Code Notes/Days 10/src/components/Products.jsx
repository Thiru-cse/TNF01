import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Products = ({setId}) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://6694b1874bd61d8314c84020.mockapi.io/api/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  const handleEdit=(id)=>{
    setId(id)
    navigate(`/edit/${id}`)
  }

  const handleDelete=async(id)=>{
    await axios.delete(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`)
    .then(res=>setDeleteData(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Desc</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.product_id}</td>
                  <td>{item.product_name}</td>
                  <td>{item.product_price}</td>
                  <td>{item.product_description}</td>
                  <td><button onClick={()=>handleEdit(item.id)}>Edit</button></td>
                  <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <button onClick={()=>{navigate('/create')}}>Create</button>
    </div>
  );
};

export default Products;
