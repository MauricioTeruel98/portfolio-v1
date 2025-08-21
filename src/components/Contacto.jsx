import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi'

const Contacto = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            reset();
            
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }, 2000);
    }

    return (
        <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="section-title">
                    <span className="gradient-text">Contacto</span>
                </h2>
                <p className="section-subtitle">
                    ¿Tienes un proyecto en mente? ¡Hablemos sobre cómo puedo ayudarte a hacerlo realidad!
                </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Vamos a crear algo increíble juntos
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
                                Si tienes una idea o necesitas ayuda con tu proyecto web, no dudes en contactarme.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-4 bg-dark-900/30 rounded-xl border border-dark-700/30">
                                <div className="w-12 h-12 bg-accent-600/20 rounded-lg flex items-center justify-center">
                                    <FiMail className="w-6 h-6 text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-medium">mauricioteruel98@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-dark-900/30 rounded-xl border border-dark-700/30">
                                <div className="w-12 h-12 bg-accent-600/20 rounded-lg flex items-center justify-center">
                                    <FiUser className="w-6 h-6 text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Ubicación</p>
                                    <p className="text-white font-medium">Tucumán, Argentina</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-dark-900/30 rounded-xl border border-dark-700/30">
                                <div className="w-12 h-12 bg-accent-600/20 rounded-lg flex items-center justify-center">
                                    <FiMessageSquare className="w-6 h-6 text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Disponibilidad</p>
                                    <p className="text-white font-medium">Disponible para proyectos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Nombre completo
                                    </label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            {...register('name', { required: 'El nombre es requerido' })}
                                            className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-400 text-sm">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Teléfono
                                    </label>
                                    <div className="relative">
                                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="tel"
                                            {...register('phone')}
                                            className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                                            placeholder="Tu teléfono"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <div className="relative">
                                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        {...register('email', { 
                                            required: 'El email es requerido',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email inválido'
                                            }
                                        })}
                                        className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Mensaje
                                </label>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                    <textarea
                                        {...register('message', { required: 'El mensaje es requerido' })}
                                        rows="5"
                                        className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 resize-none"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                    />
                                </div>
                                {errors.message && (
                                    <p className="text-red-400 text-sm">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Enviando...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <FiSend className="w-5 h-5" />
                                        <span>Enviar mensaje</span>
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
                <div className="fixed top-20 right-5 lg:right-10 z-50 animate-fade-in">
                    <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg border border-green-500/50">
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>¡Mensaje enviado exitosamente!</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contacto