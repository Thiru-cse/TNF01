import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectAPI = () => {
    const [fetchDatas, setFetchDatas] = useState([]) //empty array ?

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        // try{
        //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        //     const jsonData = await res.json(); // [{}]
        //     setFetchDatas(jsonData);
        // }catch(error){
        //     console.log(error);
        // }

        await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>setFetchDatas(res.data))
        .catch(error=>console.log(error));
    }

    return (
        <div>
            <h1>UseEffect Component</h1>
            {fetchDatas.map((item)=>{
                return(
                    <>
                    <div key={item.id}>
                        <h1>{item.userId}</h1>
                        <h1>{item.title}</h1>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default UseEffectAPI;