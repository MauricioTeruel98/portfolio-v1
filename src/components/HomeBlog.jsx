import React from 'react'
import blogPosts from '../data/blogPosts'
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

const HomeBlog = () => {
    return (
        <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="section-title">
                    <span className="gradient-text">Blog</span> & Artículos
                </h2>
                <p className="section-subtitle">
                    Comparto mis conocimientos y experiencias en desarrollo web
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.slice(0, 2).map(post => (
                    <Link 
                        to={`/post/${post.id}`} 
                        key={post.id}
                        className="group"
                    >
                        <article className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl overflow-hidden hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/25">
                            {/* Post Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    src={post.imagenes[0]} 
                                    alt={post.titulo} 
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Read More Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="px-6 py-3 bg-accent-600 text-white rounded-lg flex items-center space-x-2 hover:bg-accent-700 transition-colors duration-300">
                                        <span>Leer más</span>
                                        <FiArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        <FiCalendar className="w-4 h-4" />
                                        <span>Publicado</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FiClock className="w-4 h-4" />
                                        <span>5 min lectura</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300 leading-tight">
                                    {post.titulo}
                                </h3>
                                
                                <p className="text-gray-400 leading-relaxed">
                                    {post.bajada}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
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
                        </article>
                    </Link>
                ))}
            </div>

            {/* View All Button */}
            {/* <div className="text-center pt-8">
                <Link to={'/'} className="btn-secondary">
                    Ver Todos los Artículos
                </Link>
            </div> */}
        </div>
    )
}

export default HomeBlog