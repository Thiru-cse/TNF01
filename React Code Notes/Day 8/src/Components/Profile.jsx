import React, { useContext } from 'react';
import { myContext } from '../App';

const Profile = () => {
    const [userProfile, setUserProfile] = useContext(myContext);
    const handleSubmit =()=>{
        setUserProfile('Your Name');
    }
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>UserName: {userProfile}</h2>
            <button onClick={handleSubmit}>Click</button>
        </div>
    );
};

export default Profile;