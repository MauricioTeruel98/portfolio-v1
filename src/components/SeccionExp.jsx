import React from 'react'

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
                        {/* Job 1 */}
                        <div className="relative">
                            <div className="flex items-start">
                                {/* Timeline dot */}
                                <div className="absolute left-12 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-dark-950 shadow-lg z-10"></div>

                                {/* Centered card container */}
                                <div className="w-full flex justify-center">
                                    <div className="w-full max-w-2xl">
                                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                                            <div className="space-y-3">
                                                <div className="text-accent-400 font-mono text-sm">Agosto 2024 - Actualidad</div>
                                                <h3 className="text-xl font-bold text-white">Desarrollador Web Fullstack</h3>
                                                <div className="text-lg font-semibold text-accent-300">Buzz Agencia Digital</div>
                                                <ul className="text-gray-300 text-sm space-y-1">
                                                    <li>• Creación y prueba de sitios web personalizados, garantizando alineación con requisitos y expectativas.</li>
                                                    <li>• Implementación eficiente en producción, asegurando disponibilidad y rendimiento óptimo.</li>
                                                    <li>• Soporte técnico integral para clientes, abordando consultas sobre sitios web, servidores y correos.</li>
                                                    <li>• Administración exitosa de servidores web y de correo electrónico.</li>
                                                    <li>• Mantenimiento proactivo y optimización de sitios web.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job 2 */}
                        <div className="relative">
                            <div className="flex items-start">
                                {/* Timeline dot */}
                                <div className="absolute left-12 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-dark-950 shadow-lg z-10"></div>

                                {/* Centered card container */}
                                <div className="w-full flex justify-center">
                                    <div className="w-full max-w-2xl">
                                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                                            <div className="space-y-3">
                                                <div className="text-accent-400 font-mono text-sm">Marzo 2024 - Octubre 2024</div>
                                                <h3 className="text-xl font-bold text-white">Desarrollador Web Fullstack</h3>
                                                <div className="text-lg font-semibold text-accent-300">InitSoluciones</div>
                                                <ul className="text-gray-300 text-sm space-y-1">
                                                    <li>• Desarrollo sitios web complejos y sus funcionalidades.</li>
                                                    <li>• Mantengo sitios web, añadiendo funcionalidades y corrigiendo errores.</li>
                                                    <li>• Logro destacado: Desarrollo de un sistema de ecommerce completo para un mayorista de cotillón, facilitando la venta y administración de pedidos.</li>
                                                    <li>• Tecnologías: PHP, Laravel, React.js, MySQL, Javascript, HTML, CSS, Tailwind CSS, Firebase.</li>
                                                    <li>• Mantenimiento proactivo y optimización de sitios web.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job 3 */}
                        <div className="relative">
                            <div className="flex items-start">
                                {/* Timeline dot */}
                                <div className="absolute left-12 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-dark-950 shadow-lg z-10"></div>

                                {/* Centered card container */}
                                <div className="w-full flex justify-center">
                                    <div className="w-full max-w-2xl">
                                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                                            <div className="space-y-3">
                                                <div className="text-accent-400 font-mono text-sm">Junio 2022 - Enero 2024</div>
                                                <h3 className="text-xl font-bold text-white">Desarrollador Web Fullstack</h3>
                                                <div className="text-lg font-semibold text-accent-300">Telematica SRL</div>
                                                <ul className="text-gray-300 text-sm space-y-1">
                                                    <li>• Creación y prueba de sitios web personalizados, garantizando alineación con requisitos y expectativas.</li>
                                                    <li>• Implementación eficiente en producción, asegurando disponibilidad y rendimiento óptimo.</li>
                                                    <li>• Soporte técnico integral para clientes, abordando consultas sobre sitios web, servidores y correos.</li>
                                                    <li>• Administración exitosa de servidores web y de correo electrónico.</li>
                                                    <li>• Mantenimiento proactivo y optimización de sitios web.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden flex justify-center">
                    <div className="space-y-6 w-full max-w-2xl">
                        {/* Job 1 */}
                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                            <div className="space-y-3">
                                <div className="text-accent-400 font-mono text-sm">Agosto 2024 - Actualidad</div>
                                <h3 className="text-xl font-bold text-white">Desarrollador Web Fullstack</h3>
                                <div className="text-lg font-semibold text-accent-300">Buzz Agencia Digital</div>
                                <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Creación y prueba de sitios web personalizados, garantizando alineación con requisitos y expectativas.</li>
                                    <li>• Implementación eficiente en producción, asegurando disponibilidad y rendimiento óptimo.</li>
                                    <li>• Soporte técnico integral para clientes, abordando consultas sobre sitios web, servidores y correos.</li>
                                    <li>• Administración exitosa de servidores web y de correo electrónico.</li>
                                    <li>• Mantenimiento proactivo y optimización de sitios web.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Job 2 */}
                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                            <div className="space-y-3">
                                <div className="text-accent-400 font-mono text-sm">Marzo 2024 - Octubre 2024</div>
                                <h3 className="text-xl font-bold text-white">Desarrollador Web Fullstack</h3>
                                <div className="text-lg font-semibold text-accent-300">InitSoluciones</div>
                                <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Desarrollo sitios web complejos y sus funcionalidades.</li>
                                    <li>• Mantengo sitios web, añadiendo funcionalidades y corrigiendo errores.</li>
                                    <li>• Logro destacado: Desarrollo de un sistema de ecommerce completo para un mayorista de cotillón, facilitando la venta y administración de pedidos.</li>
                                    <li>• Tecnologías: PHP, Laravel, React.js, MySQL, Javascript, HTML, CSS, Tailwind CSS, Firebase.</li>
                                    <li>• Mantenimiento proactivo y optimización de sitios web.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Job 3 */}
                        <div className="bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                            <div className="space-y-3">
                                <div className="text-accent-400 font-mono text-sm">Junio 2022 - Enero 2024</div>
                                <h3 className="text-xl font-bold text-white">Desarrollador Web Fullstack</h3>
                                <div className="text-lg font-semibold text-accent-300">Telematica SRL</div>
                                <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Creación y prueba de sitios web personalizados, garantizando alineación con requisitos y expectativas.</li>
                                    <li>• Implementación eficiente en producción, asegurando disponibilidad y rendimiento óptimo.</li>
                                    <li>• Soporte técnico integral para clientes, abordando consultas sobre sitios web, servidores y correos.</li>
                                    <li>• Administración exitosa de servidores web y de correo electrónico.</li>
                                    <li>• Mantenimiento proactivo y optimización de sitios web.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionExp