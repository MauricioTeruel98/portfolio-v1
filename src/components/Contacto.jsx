import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare, FiType } from 'react-icons/fi'
import { sendContactEmail } from '../config/api'

const Contacto = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setShowError(false);
        setErrorMessage('');
        
        try {
            const contactData = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };

            const result = await sendContactEmail(contactData);

            if (result.success) {
                setShowSuccess(true);
                reset();
                
                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            } else {
                setErrorMessage(result.message || 'Error desconocido');
                setShowError(true);
                
                setTimeout(() => {
                    setShowError(false);
                }, 8000);
            }
        } catch (error) {
            console.error('Error al enviar mensaje:', error);
            
            // Mensaje de error más específico según el tipo
            let message = 'Error inesperado al enviar el mensaje.';
            
            if (error.message.includes('fetch')) {
                message = 'Error de conexión. Verifica tu conexión a internet e inténtalo de nuevo.';
            } else if (error.message.includes('CORS')) {
                message = 'Error de configuración del servidor. Contacta al administrador.';
            } else if (error.message) {
                message = error.message;
            }
            
            setErrorMessage(message);
            setShowError(true);
            
            setTimeout(() => {
                setShowError(false);
            }, 8000);
        } finally {
            setIsSubmitting(false);
        }
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
                                            {...register('name', { 
                                                required: 'El nombre es requerido',
                                                maxLength: { value: 100, message: 'El nombre no puede tener más de 100 caracteres' }
                                            })}
                                            className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                                            placeholder="Tu nombre completo"
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
                                            maxLength: { value: 255, message: 'El email no puede tener más de 255 caracteres' },
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
                                    Asunto
                                </label>
                                <div className="relative">
                                    <FiType className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        {...register('subject', { 
                                            maxLength: { value: 200, message: 'El asunto no puede tener más de 200 caracteres' }
                                        })}
                                        className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                                        placeholder="¿De qué quieres hablar? (opcional)"
                                    />
                                </div>
                                {errors.subject && (
                                    <p className="text-red-400 text-sm">{errors.subject.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Mensaje
                                </label>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                    <textarea
                                        {...register('message', { 
                                            maxLength: { value: 2000, message: 'El mensaje no puede tener más de 2000 caracteres' }
                                        })}
                                        rows="5"
                                        className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-600/50 rounded-lg text-white placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 resize-none"
                                        placeholder="Cuéntame sobre tu proyecto, qué necesitas, plazos, presupuesto... (opcional)"
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
                            <span>¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {showError && (
                <div className="fixed top-20 right-5 lg:right-10 z-50 animate-fade-in">
                    <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg border border-red-500/50 max-w-md">
                        <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="font-semibold">Error al enviar mensaje</div>
                                <div className="text-sm text-red-100 mt-1">{errorMessage}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contacto