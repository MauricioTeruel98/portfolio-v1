import React from 'react'
import blogPosts from '../data/blogPosts'
import usePortfolio from '../hooks/usePortfolio'
import { Link } from 'react-router-dom';
import EnterLink from './elements/EnterLink';

const HomeBlog = () => {

    const { clasesParaAnimacion } = usePortfolio();

    return (
        <>
            <div className='mt-20'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2 className='text-4xl'>BLOG</h2>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-20'>
                {
                    blogPosts.slice(0, 2).map(post => (
                        <Link to={`/post/${post.id}`} className={clasesParaAnimacion} key={post.id}>
                            <div className="card w-full h-96 bg-base-100 shadow-xl image-full ">
                                <figure><img className='w-full' src={post.imagenes[0]} alt={post.titulo} /></figure>
                                <div className="card-body justify-end">
                                    <EnterLink />
                                    <h2 className="card-title justify-center">{post.titulo}</h2>
                                    <h3 className='text-center'>{post.bajada}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className='w-full flex justify-center mt-10'>
                <Link to={'/'} className="btn btn-secondary rounded-full">
                    Ver Todos
                </Link>
            </div>
        </>
    )
}

export default HomeBlog