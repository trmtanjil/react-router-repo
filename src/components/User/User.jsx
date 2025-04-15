import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email}=user;
    return (
        <div>
             <div className='border-2 border-cyan-400 rounded-2xl my-4'>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <Link  className='btn my-2 ' to={`/users/${id}`}>onther</Link>
            </div>
        </div>
    );
};

export default User;