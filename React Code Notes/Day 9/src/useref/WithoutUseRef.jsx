import React, { useEffect, useRef, useState } from 'react';

const WithoutUseRef = () => {
    // const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(0);
    const myRef = useRef();
    const refinputvalue = useRef();

    useEffect(()=>{
        myRef.current.focus();
    },[])

    const handleClick =()=>{
        console.log(myRef.current.value);
        refinputvalue.current = myRef.current.value
        
        setData(data=>data+1)
    }
    // const handleChange=(e)=>{
    //     setInputValue(e.target.value);
    // }
    return (
        <>
        <div>
            <h1>UseRef Component</h1>
            {/* <input type="text" value={inputValue} onChange={handleChange} /> */}
            <input type="text" placeholder='Enter UserName' ref={myRef} />
            <button onClick={handleClick}>Click</button>
            <h1>{refinputvalue}</h1>
        </div>
        </>
    );
};

export default WithoutUseRef;