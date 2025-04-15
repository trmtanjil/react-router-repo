import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
     console.log(post);
    return (
        <div>
             <div className='border-2 border-cyan-400 rounded-2xl my-4'>
               <h2>{post.id}</h2>
               <h2>{post.title}</h2>
               <Link to={`/posts/${post.id}`} className='btn p-2 m-3'>Another</Link>
            </div>
        </div>
    );
};

export default Post;