import React from 'react';
import {useLocation} from "react-router-dom";

const UserProfile = () => {
    const location = useLocation();
    const {
        picture,
        age,
        name,
        gender,
        company,
        email,
        phone,
        address,
        about
    } = location.state || [];


    return (
        <div>
            <h2>{name}</h2>
            <img src={picture} alt={name} />
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
            <p>Company: {company}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>About: {about}</p>
        </div>
    );
};

export default UserProfile;
