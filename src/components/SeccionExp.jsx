import React from 'react'
import { experienciaData } from '../data/experiencia'

const SeccionExp = () => {
    return (
        <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="section-title">
                    <span className="gradient-text">Experiencia</span> Profesional
                </h2>
                <p className="section-subtitle">
                    Mi trayectoria profesional en el desarrollo web y las empresas donde he crecido
                </p>
            </div>

            {/* Timeline - Left-aligned line with centered cards */}
            <div className="relative">
                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Timeline line - left-aligned */}
                    <div className="absolute left-12 w-0.5 h-full bg-gradient-to-b from-accent-500 via-accent-400 to-transparent"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {experienciaData.map((trabajo, index) => (
                            <div key={trabajo.id} className="relative">
                                <div className="flex items-start">
                                    {/* Timeline dot */}
                                    <div className="absolute left-12 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-dark-950 shadow-lg z-10"></div>

                                    {/* Centered card container */}
                                    <div className="w-full flex justify-center">
                                        <div className="w-full max-w-2xl">
                                            <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                                                <div className="space-y-3">
                                                    <div className="text-accent-400 font-mono text-sm">{trabajo.periodo}</div>
                                                    <h3 className="text-xl font-bold text-white">{trabajo.titulo}</h3>
                                                    <div className="text-lg font-semibold text-accent-300">{trabajo.empresa}</div>
                                                    <ul className="text-gray-300 text-sm space-y-1">
                                                        {trabajo.responsabilidades.map((responsabilidad, idx) => (
                                                            <li key={idx}>• {responsabilidad}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden flex justify-center">
                    <div className="space-y-6 w-full max-w-2xl">
                        {experienciaData.map((trabajo) => (
                            <div key={trabajo.id} className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                                <div className="space-y-3">
                                    <div className="text-accent-400 font-mono text-sm">{trabajo.periodo}</div>
                                    <h3 className="text-xl font-bold text-white">{trabajo.titulo}</h3>
                                    <div className="text-lg font-semibold text-accent-300">{trabajo.empresa}</div>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        {trabajo.responsabilidades.map((responsabilidad, idx) => (
                                            <li key={idx}>• {responsabilidad}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionExp