import axios from 'axios';
import React, { useState } from 'react';

const PostCall = () => {
    const [postCallData, setPostCallData] = useState([])
  const [postCallMsg, setPostCallMsg] = useState('')

  const handleSubmit =()=>{
    postCall();
  }

    const postCall = async()=>{
        const payload = {firstName:'Thiru', lastName:"Cse", email:"thiru.c.cse@gamil.com",designation:"SDE"}
        axios.post('http://localhost:4000/api/create-emp', payload)
        .then((res)=>{setPostCallData(res.data.data)
            setPostCallMsg(res.data.message)
        })
        .catch((err)=>console.log(err));
    }
    return (
        <div>
            <h1>Create Employee</h1>
            <button onClick={handleSubmit}>Add Employee</button>
            {postCallData.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                        <h2>Employee Name: {item.firstName} {item.lastName}</h2>
                        <h2>Employee Email: {item.email}</h2>
                        <h2>Employee Email: {item.email}</h2>
                        <h2>Employee designation: {item.designation}</h2>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default PostCall;