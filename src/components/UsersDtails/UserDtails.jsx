import React from 'react';
import { useLoaderData } from 'react-router';
 

const UserDtails = () => {
   const userDatails = useLoaderData()
   const {name}=userDatails;
   
    return (
        <div>
           <div className='border-2 border-gray-400 rounded-2xl my-4 p-4 bg-base-100'>
           <h1>{name}</h1>
           </div>
        </div>
    );
};

export default UserDtails;