import React, { useState } from 'react'
import { getCertificadosDestacados } from '../data/certificados'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiEye, FiAward } from 'react-icons/fi'
import ModalCertificado from './ModalCertificado'

const SeccionCertificados = () => {
    const certificadosDestacados = getCertificadosDestacados()
    const [selectedCertificado, setSelectedCertificado] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleVerCertificado = (certificado) => {
        setSelectedCertificado(certificado)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCertificado(null)
    }

    return (
        <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="section-title">
                    <span className="gradient-text">Certificados</span> & Formación
                </h2>
                <p className="section-subtitle">
                    Mi formación continua y certificaciones en las últimas tecnologías
                </p>
            </div>

            {/* Certificados Destacados Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {certificadosDestacados.map(certificado => (
                    <div key={certificado.id} className="group relative">
                        <div className="card p-6 hover:border-accent-500/50 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25">
                            {/* Certificate Preview Image */}
                            <div className="relative mb-6 overflow-hidden rounded-lg">
                                <img 
                                    src={certificado.preview} 
                                    alt={certificado.titulo}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Badge de destacado */}
                                <div className="absolute top-3 right-3">
                                    <div className="bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                                        <FiAward className="w-3 h-3" />
                                        Destacado
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                                        {certificado.titulo}
                                    </h3>
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                                        <span className="font-medium">{certificado.institucion}</span>
                                        <span>{certificado.fecha}</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                    {certificado.descripcion}
                                </p>

                                {/* Metadata */}
                                <div className="flex items-center justify-between text-xs text-gray-400">
                                    <span className="bg-dark-700 px-2 py-1 rounded-full">
                                        {certificado.tipo}
                                    </span>
                                    <span>{certificado.duracion}</span>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {certificado.tecnologias.slice(0, 3).map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="text-xs bg-accent-600/20 text-accent-400 px-2 py-1 rounded-full border border-accent-600/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {certificado.tecnologias.length > 3 && (
                                        <span className="text-xs text-gray-400 px-2 py-1">
                                            +{certificado.tecnologias.length - 3} más
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={() => handleVerCertificado(certificado)}
                                        className="flex-1 bg-accent-600 hover:bg-accent-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <FiEye className="w-4 h-4" />
                                        Ver Certificado
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ver Todos Button */}
            <div className="text-center pt-8">
                <Link 
                    to="/certificados" 
                    className="inline-flex items-center gap-2 bg-dark-700 hover:bg-dark-600 text-white font-medium px-8 py-3 rounded-lg border border-dark-600 transition-all duration-300 hover:scale-105 hover:border-accent-500/50"
                >
                    Ver Todos los Certificados
                    <FiExternalLink className="w-4 h-4" />
                </Link>
            </div>

            {/* Modal */}
            <ModalCertificado 
                certificado={selectedCertificado}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    )
}

export default SeccionCertificados