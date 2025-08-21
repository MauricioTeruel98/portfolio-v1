import React from 'react'
import { FiDownload } from 'react-icons/fi'
import resume from '../assets/pdf/CV_Mauricio_Teruel.pdf'

const BotonFlotante = () => {
    return (
        <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 group"
        >
            <div className="relative">
                {/* Main Button */}
                <div className="w-16 h-16 bg-accent-600 hover:bg-accent-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-accent-600/25 transition-all duration-300 hover:scale-110 border-2 border-accent-500/30">
                    <FiDownload className="w-6 h-6" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-dark-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Descargar CV
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-800"></div>
                </div>
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-accent-400/30 animate-ping"></div>
            </div>
        </a>
    )
}

export default BotonFlotante