import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCall = () => {
  // const baseURL = 'http://localhost:4000/'
  const [getCallData, setGetCallData] = useState([])
  const [getCallMsg, setGetCallMsg] = useState('')

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    axios.get('http://localhost:4000/api/get-empdetails')
    .then((res)=>{
        setGetCallData(res.data.data)
        setGetCallMsg(res.data.message)
    })
  }
  return (
    <div>
      <h1>Employee List</h1>
      {getCallData.map((item,index)=>{
        return(
            <>
             <div className="card" key={index}>
        <div className="card-body">
          {/* <h5 className="card-title">{item._id}</h5> */}
          <h5 className="card-title">{item.firstName}</h5>
          <p className="card-text">{item.email}</p>
          <a href="#" className="btn btn-primary">
           {item.designation}
          </a>
        </div>
      </div>
            </>
        )
      })}
     
    </div>
  );
};

export default GetCall;
