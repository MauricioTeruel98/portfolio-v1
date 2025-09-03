import React, { useState } from 'react'
import { getTodosCertificados } from '../data/certificados'
import { FiEye, FiAward, FiCalendar, FiClock } from 'react-icons/fi'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import ModalCertificado from '../components/ModalCertificado'

const Certificados = () => {
    const [certificados, setCertificados] = useState([])
    const [filtro, setFiltro] = useState('todos')
    const [selectedCertificado, setSelectedCertificado] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setCertificados(getTodosCertificados())
    }, [])

    const handleVerCertificado = (certificado) => {
        setSelectedCertificado(certificado)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCertificado(null)
    }

    const certificadosFiltrados = certificados.filter(cert => {
        if (filtro === 'todos') return true
        if (filtro === 'destacados') return cert.destacado
        return cert.tipo.toLowerCase().includes(filtro.toLowerCase())
    })

    const tipos = ['todos', 'destacados', 'bootcamp', 'curso online', 'certificación']

    useEffect(() => {
        // Scroll to top cuando se monta el componente
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="min-h-screen pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center space-y-6 mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white">
                            Mis <span className="gradient-text">Certificados</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Una colección completa de mi formación continua y certificaciones profesionales en tecnologías de vanguardia
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <FiAward className="text-accent-400" />
                                <span>{certificados.length} Certificados</span>
                            </div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <FiCalendar className="text-accent-400" />
                                <span>2023 - 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Filtros */}
                    {/* <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {tipos.map(tipo => (
                            <button
                                key={tipo}
                                onClick={() => setFiltro(tipo)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                                    filtro === tipo
                                        ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/25'
                                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                                }`}
                            >
                                {tipo === 'todos' ? 'Todos' : tipo}
                            </button>
                        ))}
                    </div>
                </div> */}

                    {/* Grid de Certificados */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {certificadosFiltrados.map(certificado => (
                            <div key={certificado.id} className="group relative">
                                <div className="card p-6 h-full hover:border-accent-500/50 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25">
                                    {/* Certificate Preview Image */}
                                    <div className="relative mb-6 overflow-hidden rounded-lg">
                                        <img
                                            src={certificado.preview}
                                            alt={certificado.titulo}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Badge de destacado */}
                                        {certificado.destacado && (
                                            <div className="absolute top-3 right-3">
                                                <div className="bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                                                    <FiAward className="w-3 h-3" />
                                                    Destacado
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Certificate Info */}
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300 line-clamp-2">
                                                {certificado.titulo}
                                            </h3>
                                            <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                                                <span className="font-medium">{certificado.institucion}</span>
                                                <span className="flex items-center gap-1">
                                                    <FiCalendar className="w-3 h-3" />
                                                    {certificado.fecha}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {certificado.descripcion}
                                        </p>

                                        {/* Metadata */}
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <span className="bg-dark-700 px-3 py-1 rounded-full">
                                                {certificado.tipo}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiClock className="w-3 h-3" />
                                                {certificado.duracion}
                                            </span>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {certificado.tecnologias.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-accent-600/20 text-accent-400 px-2 py-1 rounded-full border border-accent-600/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div className="pt-4">
                                            <button
                                                onClick={() => handleVerCertificado(certificado)}
                                                className="w-full bg-accent-600 hover:bg-accent-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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

                    {/* Mensaje si no hay resultados */}
                    {certificadosFiltrados.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 text-lg">
                                No se encontraron certificados para el filtro seleccionado
                            </div>
                        </div>
                    )}

                    {/* Estadísticas */}
                    <div className="mt-20 pt-16 border-t border-dark-700">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-accent-400">
                                    {certificados.length}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    Total Certificados
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-accent-400">
                                    {certificados.filter(c => c.destacado).length}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    Destacados
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-accent-400">
                                    {new Set(certificados.map(c => c.institucion)).size}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    Instituciones
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-accent-400">
                                    {new Set(certificados.flatMap(c => c.tecnologias)).size}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    Tecnologías
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <ModalCertificado
                        certificado={selectedCertificado}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Certificados
