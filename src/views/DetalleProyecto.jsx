import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import proyectosPortfolio from '../data/proyectos';
import { BiLogoReact, BiLogoJavascript, BiLogoGithub } from 'react-icons/bi'
import { RiSupabaseFill } from "react-icons/ri";
import { FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiTailwindcss, SiPhp } from 'react-icons/si'
import { TbBrandNextjs, TbWorld } from 'react-icons/tb'
import { FiArrowLeft } from 'react-icons/fi'

const DetalleProyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        const proyectoEncontrado = proyectosPortfolio.find(p => p.id === parseInt(id));
        setProyecto(proyectoEncontrado);
    }, [id]);

    const tecnologiaIconoMapping = {
        react: <BiLogoReact className="w-8 h-8 text-blue-400" />,
        node: <FaNodeJs className="w-8 h-8 text-green-500" />,
        mongo: <SiMongodb className="w-8 h-8 text-green-600" />,
        tailwind: <SiTailwindcss className="w-8 h-8 text-cyan-400" />,
        bootstrap: <FaBootstrap className="w-8 h-8 text-purple-600" />,
        laravel: <FaLaravel className="w-8 h-8 text-red-500" />,
        mysql: <SiMysql className="w-8 h-8 text-blue-600" />,
        nextjs: <TbBrandNextjs className="w-8 h-8 text-gray-800 dark:text-white" />,
        javascript: <BiLogoJavascript className="w-8 h-8 text-yellow-400" />,
        supabase: <RiSupabaseFill className="w-8 h-8 text-green-500" />,
        php: <SiPhp className="w-8 h-8 text-purple-600" />  
    };

    // Función para obtener solo las tecnologías que están en true
    const getActiveTechnologies = () => {
        if (!proyecto.tecnologias) return [];

        return proyecto.tecnologias
            .filter(tech => Object.values(tech)[0] === true)
            .map(tech => Object.keys(tech)[0]);
    };

    const nextImage = () => {
        if (proyecto.imagen && currentImageIndex < proyecto.imagen.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    if (!proyecto.id) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-500 mx-auto"></div>
                    <p className="mt-4 text-gray-400">Cargando proyecto...</p>
                </div>
            </div>
        );
    }

    const activeTechnologies = getActiveTechnologies();

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
                                <span className="text-white">Portfolio</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden bg-dark-900/50 border border-dark-700/50">
                                {proyecto.imagen && proyecto.imagen.length > 0 && (
                                    <>
                                        <img
                                            src={proyecto.imagen[currentImageIndex]}
                                            alt={`${proyecto.titulo} - Imagen ${currentImageIndex + 1}`}
                                            className="w-full h-64 md:h-96 object-cover"
                                        />

                                        {/* Navigation Arrows */}
                                        {proyecto.imagen.length > 1 && (
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
                                                    disabled={currentImageIndex === proyecto.imagen.length - 1}
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
                            {proyecto.imagen && proyecto.imagen.length > 1 && (
                                <div className="flex space-x-2 overflow-x-auto pb-2">
                                    {proyecto.imagen.map((img, index) => (
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

                        {/* Project Info */}
                        <div className="space-y-6">
                            {/* Project Links */}
                            <div className="flex space-x-4">
                                {proyecto.github && (
                                    <a
                                        href={proyecto.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-dark-800/50 hover:bg-dark-700/70 border border-dark-600/50 hover:border-accent-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <BiLogoGithub className="w-6 h-6" />
                                    </a>
                                )}
                                {proyecto.link && (
                                    <a
                                        href={proyecto.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-dark-800/50 hover:bg-dark-700/70 border border-dark-600/50 hover:border-accent-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <TbWorld className="w-6 h-6" />
                                    </a>
                                )}
                            </div>

                            {/* Project Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                                {proyecto.titulo}
                            </h1>

                            {/* Project URL */}
                            {proyecto.link && (
                                <a
                                    href={proyecto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-base md:text-lg text-accent-400 hover:text-accent-300 underline transition-colors duration-300 break-all"
                                >
                                    {proyecto.link}
                                </a>
                            )}

                            {/* Project Description */}
                            <div className="space-y-4">
                                <h2 className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                    {proyecto.bajada}
                                </h2>

                                {proyecto.contenido && (
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {proyecto.contenido}
                                    </p>
                                )}
                            </div>

                            {/* Technologies */}
                            {activeTechnologies.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-lg md:text-xl font-semibold text-accent-400">
                                        Tecnologías utilizadas:
                                    </h3>
                                    <div className="flex flex-wrap gap-3 md:gap-4">
                                        {activeTechnologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center space-y-2 p-2 md:p-3 bg-dark-800/50 rounded-xl border border-dark-600/50 hover:border-accent-500/50 transition-all duration-300 hover:scale-110"
                                            >
                                                {tecnologiaIconoMapping[tech] || <span className="w-6 h-6 md:w-8 md:h-8 text-gray-400">{tech}</span>}
                                                <span className="text-xs text-gray-400 capitalize">
                                                    {tech}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetalleProyecto;
