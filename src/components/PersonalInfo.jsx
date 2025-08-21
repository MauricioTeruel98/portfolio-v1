import React from 'react'
import personalInfo from '../data/infoPersonal'
import resume from '../assets/pdf/CV_Mauricio_Teruel.pdf'

const PersonalInfo = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-4">
                <p className="text-accent-400 font-mono text-lg">¡Hola! Soy</p>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    {personalInfo.miNombre.split(' ')[0]}
                    <span className="block text-accent-400">{personalInfo.miNombre.split(' ')[1]}</span>
                </h1>
            </div>

            {/* Description */}
            <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    {personalInfo.informacion}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#portfolio" className="btn-primary">
                        Ver Portfolio
                    </a>
                    <a href={resume}
                        target="_blank"
                        rel="noopener noreferrer" className="btn-secondary">
                        Descargar CV
                    </a>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">3+</div>
                    <div className="text-sm text-gray-400">Años de experiencia</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">50+</div>
                    <div className="text-sm text-gray-400">Proyectos completados</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-accent-400">100%</div>
                    <div className="text-sm text-gray-400">Satisfacción del cliente</div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo