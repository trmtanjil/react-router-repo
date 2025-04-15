import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post =useLoaderData()
    
    return (
        <div>
              <div className='border-2 border-gray-400 rounded-2xl my-4 p-4 bg-base-100'>
           <h1>{post.id}</h1>
           <h1>{post.title}</h1>
           </div>
        </div>
    );
};

export default PostDetails;