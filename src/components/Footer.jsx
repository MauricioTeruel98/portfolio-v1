import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import redesSociales from '../data/redesSociales'
import { BiSolidEnvelope } from 'react-icons/bi'
import { useSmoothScroll } from '../hooks/usePortfolio'

const Footer = () => {
    const [showAlert, setShowAlert] = useState(false);

    const copyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = "mauricioteruel98@gmail.com"
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowAlert(true);
    };

    const { scrollToSection } = useSmoothScroll()

    const handleNavigation = (sectionId) => {
        scrollToSection(sectionId)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }, [showAlert]);

    return (
        <>
            <footer className="border-t border-dark-700/50 bg-dark-900/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Brand */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">MT</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Mauricio Teruel</h3>
                                    <p className="text-gray-400 text-sm">Desarrollador Web Fullstack</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Creando experiencias digitales excepcionales con pasión y dedicación.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button onClick={() => handleNavigation('inicio')} className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm">
                                        Inicio
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleNavigation('portfolio')} className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm">
                                        Portfolio
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleNavigation('skills')} className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm">
                                        Skills
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleNavigation('contacto')} className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm">
                                        Contacto
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Social & Contact */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Redes Sociales</h4>
                            <div className="flex space-x-4">
                                {redesSociales.map(redSocial => (
                                    <Link 
                                        key={redSocial.id} 
                                        to={redSocial.link} 
                                        target='_blank'
                                        className="w-10 h-10 bg-dark-800/50 hover:bg-accent-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 border border-dark-600/50 hover:border-accent-500/50"
                                    >
                                        {redSocial.icono}
                                    </Link>
                                ))}
                                <button 
                                    onClick={copyToClipboard}
                                    className="w-10 h-10 bg-dark-800/50 hover:bg-accent-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 border border-dark-600/50 hover:border-accent-500/50"
                                >
                                    <BiSolidEnvelope />
                                </button>
                            </div>
                            
                            <div className="pt-4">
                                <p className="text-gray-400 text-sm">
                                    Email: mauricioteruel98@gmail.com
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Ubicación: Tucumán, Argentina
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-dark-700/50 mt-8 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Mauricio Teruel. Casi todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            Desarrollado con ❤️ usando React y Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>

            {/* Success Alert */}
            {showAlert && (
                <div className="fixed top-20 right-5 lg:right-10 z-50 animate-fade-in">
                    <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg border border-green-500/50">
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Email copiado al portapapeles</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Footer