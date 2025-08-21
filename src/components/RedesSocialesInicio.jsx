import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import redesSociales from '../data/redesSociales'
import { BiSolidEnvelope } from 'react-icons/bi'

const RedesSocialesInicio = () => {
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

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }, [showAlert]);

    return (
        <div className="space-y-8 animate-slide-up">
            {/* Profile Image */}
            <div className="flex justify-center">
                <div className="relative">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-accent-500/30 shadow-2xl">
                        <img 
                            src="https://avatars.githubusercontent.com/u/92469898?v=4" 
                            alt="Mauricio Teruel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Floating accent ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-accent-400/20 animate-pulse"></div>
                </div>
            </div>

            {/* Social Links Grid - Reduced spacing */}
            <div className="flex flex-wrap gap-3 justify-center max-w-sm mx-auto">
                {redesSociales.map(redSocial => (
                    <Link 
                        key={redSocial.id} 
                        to={redSocial.link} 
                        target='_blank'
                        className="group"
                    >
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-dark-800/50 hover:bg-dark-700/70 border border-dark-600/50 hover:border-accent-500/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25">
                            <div className="text-gray-400 group-hover:text-accent-400 transition-colors duration-300 text-lg md:text-xl">
                                {redSocial.icono}
                            </div>
                        </div>
                    </Link>
                ))}
                
                {/* Email Button */}
                <button 
                    onClick={copyToClipboard}
                    className="w-14 h-14 md:w-16 md:h-16 bg-dark-800/50 hover:bg-dark-700/70 border border-dark-600/50 hover:border-accent-500/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
                >
                    <div className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-lg md:text-xl">
                        <BiSolidEnvelope />
                    </div>
                </button>
            </div>

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
        </div>
    )
}

export default RedesSocialesInicio