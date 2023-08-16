import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const DetalleBlogPost = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const postId = parseInt(id);
        const postEncontrado = blogPosts.find(p => p.id === postId);
        setPost(postEncontrado);
    }, [id]);

    return (
        <>
            <div className='w-full mx-auto mt-20'>
                <div className='w-11/12 mx-auto xl:flex gap-5'>
                    <div className='w-full xl:w-1/2 rounded-2xl p-5'>
                        <h1 className='text-5xl md:text-8xl font-semibold'>{post?.titulo}</h1>
                        <Link to={post?.link} target='_blank' className='text-lg underline text-accent'>{post?.link}</Link>
                        <div className="divider"></div>
                        <h2 className='text-xl md:text-2xl'>{post?.bajada}</h2>
                    </div>
                    <div className='w-full xl:w-1/2 rounded-2xl'>
                        <div className="carousel w-full rounded-xl lg:rounded-3xl">
                            {
                                post?.imagenes && post?.imagenes.map((img, index) => (

                                    <div id={`slide${index + 1}`} className="carousel-item relative w-full rounded-xl md:rounded-3xl justify-center" key={index}>
                                        <img src={img} alt={post?.titulo} className='rounded-xl md:rounded-3xl' />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#slide${index}`} className="btn btn-primary btn-circle">❮</a>
                                            {index < post?.imagenes.length - 1 && (
                                                <a href={`#slide${index + 2}`} className="btn btn-circle btn-primary">❯</a>
                                            )}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                    <p className='text-lg md:text-xl mt-5 p-5'>
                        {post?.contenido}
                    </p>
                </div>
                <div className='w-11/12 mx-auto'>
                    <div className="divider"></div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default DetalleBlogPost;
