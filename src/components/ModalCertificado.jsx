import React, { useEffect } from 'react'
import { FiX, FiDownload, FiCalendar, FiClock, FiAward } from 'react-icons/fi'

const ModalCertificado = ({ certificado, isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    const handleDownload = () => {
        if (certificado.archivo) {
            const link = document.createElement('a')
            link.href = certificado.archivo
            const extension = certificado.archivo.endsWith('.pdf') ? 'pdf' : 'jpg'
            link.download = `${certificado.titulo}.${extension}`
            link.click()
        }
    }

    if (!isOpen || !certificado) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative w-full max-w-6xl h-[95vh] sm:h-auto sm:max-h-[90vh] bg-dark-900 rounded-lg sm:rounded-2xl border border-dark-700 shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex-shrink-0 p-4 sm:p-6 border-b border-dark-700">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 line-clamp-2">
                                {certificado.titulo}
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <FiAward className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    <span className="truncate">{certificado.institucion}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span>{certificado.fecha}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiClock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span>{certificado.duracion}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 flex-shrink-0">
                            {/* {certificado.archivo && (
                                <button
                                    onClick={handleDownload}
                                    className="hidden sm:flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                >
                                    <FiDownload className="w-4 h-4" />
                                    Descargar
                                </button>
                            )} */}
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors duration-300"
                            >
                                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                    {/* Certificate Image/PDF Viewer */}
                    <div className="flex-1 bg-dark-950 flex items-center justify-center p-3 sm:p-6 min-h-0">
                        <img
                            src={certificado.preview}
                            alt={certificado.titulo}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        />
                </div>

                    {/* Certificate Details */}
                    <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-dark-700 bg-dark-900/50">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 h-full overflow-y-auto">
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                                    Descripción
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {certificado.descripcion}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                                    Tecnologías
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {certificado.tecnologias.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="text-xs sm:text-sm bg-accent-600/20 text-accent-400 px-2 sm:px-3 py-1 rounded-full border border-accent-600/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                                    Detalles
                                </h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex justify-between text-sm sm:text-base">
                                        <span className="text-gray-400">Tipo:</span>
                                        <span className="text-gray-300">{certificado.tipo}</span>
                                    </div>
                                    <div className="flex justify-between text-sm sm:text-base">
                                        <span className="text-gray-400">Duración:</span>
                                        <span className="text-gray-300">{certificado.duracion}</span>
                                    </div>
                                    <div className="flex justify-between text-sm sm:text-base">
                                        <span className="text-gray-400">Fecha:</span>
                                        <span className="text-gray-300">{certificado.fecha}</span>
                                    </div>
                                    {certificado.destacado && (
                                        <div className="flex justify-between text-sm sm:text-base">
                                            <span className="text-gray-400">Estado:</span>
                                            <span className="text-accent-400 flex items-center gap-1">
                                                <FiAward className="w-3 h-3 sm:w-4 sm:h-4" />
                                                Destacado
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Download Button */}
                            {/* {certificado.archivo && (
                                <div className="block sm:hidden pt-2">
                                    <button
                                        onClick={handleDownload}
                                        className="w-full flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-4 py-3 rounded-lg transition-colors duration-300"
                                    >
                                        <FiDownload className="w-4 h-4" />
                                        Descargar Certificado
                                    </button>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCertificado
