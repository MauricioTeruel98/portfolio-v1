import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import { FiCalendar, FiClock, FiUser, FiArrowLeft } from 'react-icons/fi';

const DetalleBlogPost = () => {
    const [post, setPost] = useState({});
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        const postId = parseInt(id);
        const postEncontrado = blogPosts.find(p => p.id === postId);
        setPost(postEncontrado);
    }, [id]);

    const nextImage = () => {
        if (post.imagenes && currentImageIndex < post.imagenes.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    if (!post.id) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-500 mx-auto"></div>
                    <p className="mt-4 text-gray-400">Cargando artículo...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-accent-400 transition-colors duration-300">
                                    Inicio
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FiArrowLeft className="w-4 h-4 rotate-180" />
                                <span className="text-white">Blog</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="grid xl:grid-cols-2 gap-8 xl:gap-12">
                        {/* Post Content */}
                        <div className="space-y-6">
                            {/* Post Title */}
                            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white leading-tight">
                                {post.titulo}
                            </h1>

                            {/* Post URL */}
                            {post.link && (
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-base md:text-lg text-accent-400 hover:text-accent-300 underline transition-colors duration-300 break-all"
                                >
                                    {post.link}
                                </a>
                            )}

                            {/* Post Meta */}
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <FiCalendar className="w-4 h-4" />
                                    <span>Publicado recientemente</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FiClock className="w-4 h-4" />
                                    <span>5 min lectura</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FiUser className="w-4 h-4" />
                                    <span>Mauricio Teruel</span>
                                </div>
                            </div>

                            {/* Post Description */}
                            <div className="space-y-4">
                                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                                    {post.bajada}
                                </h2>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                <span className="px-3 py-1 bg-accent-600/20 text-accent-400 text-xs rounded-full border border-accent-600/30">
                                    Desarrollo Web
                                </span>
                                <span className="px-3 py-1 bg-dark-800/50 text-gray-400 text-xs rounded-full border border-dark-600/50">
                                    React
                                </span>
                                <span className="px-3 py-1 bg-dark-800/50 text-gray-400 text-xs rounded-full border border-dark-600/50">
                                    JavaScript
                                </span>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden bg-dark-900/50 border border-dark-700/50">
                                {post.imagenes && post.imagenes.length > 0 && (
                                    <>
                                        <img
                                            src={post.imagenes[currentImageIndex]}
                                            alt={`${post.titulo} - Imagen ${currentImageIndex + 1}`}
                                            className="w-full h-64 md:h-96 object-cover"
                                        />

                                        {/* Navigation Arrows */}
                                        {post.imagenes.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    disabled={currentImageIndex === 0}
                                                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-dark-800/80 hover:bg-dark-700/90 text-white rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-dark-600/50"
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    disabled={currentImageIndex === post.imagenes.length - 1}
                                                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-dark-800/80 hover:bg-dark-700/90 text-white rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-dark-600/50"
                                                >
                                                    →
                                                </button>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Image Thumbnails */}
                            {post.imagenes && post.imagenes.length > 1 && (
                                <div className="flex space-x-2 overflow-x-auto pb-2">
                                    {post.imagenes.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentImageIndex === index
                                                    ? 'border-accent-500'
                                                    : 'border-dark-600/50 hover:border-dark-500/50'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Post Content */}
                    {post.contenido && (
                        <div className="mt-16">
                            <div className="prose prose-invert max-w-none">
                                <div className="bg-dark-900/30 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 md:p-8">
                                    <div className="text-base md:text-lg xl:text-xl text-gray-300 leading-relaxed">
                                        {post.contenido}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetalleBlogPost;
