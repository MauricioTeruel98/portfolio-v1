import React from 'react'
import skills from '../data/skills'

const Skills = () => {
    return (
        <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="section-title">
                    <span className="gradient-text">Skills</span> & Tecnologías
                </h2>
                <p className="section-subtitle">
                    Herramientas y tecnologías que utilizo para crear experiencias digitales excepcionales
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map(skill => (
                    <div 
                        key={skill.id}
                        className="group relative"
                    >
                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl text-gray-400 group-hover:text-accent-400 transition-colors duration-300">
                                    {skill.icono}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {skill.nombre}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="text-center pt-8">
                <p className="text-gray-400 text-lg">
                    Siempre aprendiendo nuevas tecnologías para mantenerme actualizado
                </p>
            </div>
        </div>
    )
}

export default Skills