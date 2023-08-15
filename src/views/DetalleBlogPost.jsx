import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const DetalleBlogPost = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const postEncontrado = blogPosts.find(p => p.id == id);
        setPost(postEncontrado);
    }, [id]);

    return (
        <>
            <div className='w-full mx-auto mt-20'>
                <div className='w-11/12 mx-auto'>
                    
                </div>
                <Footer />
            </div>
        </>
    );
}

export default DetalleBlogPost;
