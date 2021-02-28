import React from 'react';
import './User.css';

const User = (props) => {
    const {name, image, email, job, university} = props.user;
    const {handleAddUser} = props;
    return (
        <div className="user">
            <img src={image} alt="user"/>
            <p>{name}</p>
            <p>{email}</p>
            <p>{job}</p>
            <p>{university}</p>
            <button onClick={() => handleAddUser(props.user)}>Add User</button>
        </div>
    );
};

export default User;