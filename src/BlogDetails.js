import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetails = ({blogs}) => {

    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
          setPost(response.data);
        };
    
        fetchPost();
      }, [id]);

    return (
        <div>
            <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;