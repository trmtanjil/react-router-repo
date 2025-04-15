import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData()

    return (
        <div>
            <h1>pst command length :  {posts.length}</h1>
            <div>
                {
                    posts.map(post=><Post post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;