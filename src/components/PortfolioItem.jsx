import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiInfo } from 'react-icons/fi';

const PortfolioItem = ({ proyecto }) => {
    const proyectoId = proyecto.id;

    // Función para obtener solo las tecnologías que están en true
    const getActiveTechnologies = () => {
        if (!proyecto.tecnologias) return [];
        
        return proyecto.tecnologias
            .filter(tech => Object.values(tech)[0] === true)
            .map(tech => Object.keys(tech)[0]);
    };

    const activeTechnologies = getActiveTechnologies();

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/25">
            {/* Project Image */}
            <div className="relative overflow-hidden aspect-video">
                <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={proyecto.imagen[0]} 
                    alt={proyecto.titulo} 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {proyecto.github && (
                        <a 
                            href={proyecto.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-dark-800/80 hover:bg-accent-600 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-dark-600/50"
                        >
                            <FiGithub className="w-5 h-5" />
                        </a>
                    )}
                    
                    {proyecto.link && (
                        <a 
                            href={proyecto.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-dark-800/80 hover:bg-accent-600 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-dark-600/50"
                        >
                            <FiExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    
                    <Link 
                        to={`/portfolio/${proyectoId}`}
                        className="w-12 h-12 bg-dark-800/80 hover:bg-accent-600 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-dark-600/50"
                    >
                        <FiInfo className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                    {proyecto.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {proyecto.bajada}
                </p>
                
                {/* Technologies */}
                {activeTechnologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {activeTechnologies.slice(0, 3).map((tech, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-dark-800/50 text-accent-400 text-xs rounded-full border border-dark-600/50"
                            >
                                {tech}
                            </span>
                        ))}
                        {activeTechnologies.length > 3 && (
                            <span className="px-3 py-1 bg-dark-800/50 text-gray-400 text-xs rounded-full border border-dark-600/50">
                                +{activeTechnologies.length - 3}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-500/30 transition-all duration-500 pointer-events-none"></div>
        </div>
    );
};

export default PortfolioItem;
