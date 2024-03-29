"use client"

import React, {useEffect, useState} from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
    id: number;
    title: string;
}
const FetchingInReact = () => {

    const [ posts, setPosts ] = useState<Post[]>();

    useEffect(() => {
        const fetchPosts = async () =>{
            const response = await fetch(`${BASE_URL}/posts`);
            const posts = await response.json() as Post[];
            setPosts(posts);
        }

        fetchPosts();
    }, []);

    return (
        <div className='px-4'>
            <h1 className='mb-4 text-2xl'>Data Fetching in react</h1>
            <ul>
                {posts?.map((post) =>{
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    );
};

export default FetchingInReact;