import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormikCreateday11 = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        product_id:'',
        product_name: '',
        product_price: '',
        product_description: '',
    });

    const validationSchema = Yup.object().shape({
        product_id:Yup.string().required('Product ID is Required'), //formik.errors
        product_name:Yup.string().required('Product Name is Required'),
        product_price:Yup.string().required('Product Price is Required'),
        product_description:Yup.string().required('Product Description is Required'),
    })

    const formik = useFormik({
        initialValues: {data}, //formik.values
        validationSchema,
        onSubmit:async(values)=>{
            await axios.post(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/`, values)
            .then(res=>console.log(res.data))
            .catch((err)=>console.log(err))
    
            navigate('/products');
        }
    })

    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
                <label>ProductId:
                <input type="text" name='product_id' value={formik.values.product_id} onChange={formik.handleChange} />
                </label>
                <br/>
                <div className='text-danger'>{formik.errors.product_id}</div>
                <label>Product Name:
                <input type="text" name='product_name' value={formik.values.product_name} onChange={formik.handleChange} />
                </label>
                <br/>
                <div className='text-danger'>{formik.errors.product_price}</div>
                <label>Product Price:
                <input type="text" name='product_price' value={formik.values.product_price} onChange={formik.handleChange} />
                </label>
                <br/>
                <div className='text-danger'>{formik.errors.product_description}</div>
                <label>Product Description:
                <input type="text" name='product_description' value={formik.values.product_description} onChange={formik.handleChange} />
                </label>
                <br/>
                <button type='submit'>Create</button>
            </form>
            </div>
    );
};

export default FormikCreateday11;