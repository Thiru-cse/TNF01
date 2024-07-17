import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import './FormikStyles.css'

const FormikExample = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    }

    const validationSchema = Yup.object().shape({
        name:Yup.string().required("Name is required!"),
        // email:Yup.string().email('invalid email').required("email is required!"),
        email:Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'invalid email').required("email is required!"),
        password:Yup.string().min(5,'Password must be atleast 5 digits')
        .max(8, 'Password must be atmost 8 digits')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'invalid password').required("password is required!"),
        phoneNumber:Yup.string().matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'invalid number').required("phoneNumber is required!"),
    })

    const handleSubmit=(values)=>{
        console.log(values);
    }

    return (
        <div>
            <h1>Formik Component</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Name:</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component='h3' className='errorColor' />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <Field type='email' name='email' />
                        <ErrorMessage name='email' component='h3' className='errorColor' />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type='password' name='password' />
                        <ErrorMessage name='password' component='h3' className='errorColor' />
                    </div>
                    <div>
                        <label>PhoneNumber:</label>
                        <Field type='text' name='phoneNumber' />
                        <ErrorMessage name='phoneNumber' component='h3' className='errorColor' />
                    </div>

                    <button type='submit'>Submit</button>

                </Form>
            </Formik>
        </div>
    );
};

export default FormikExample;