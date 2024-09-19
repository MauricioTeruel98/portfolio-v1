import React from 'react'

const SeccionExp = () => {
    return (
        <>

            <div className='mt-20'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2 className='text-4xl'>EXPERIENCIA</h2>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono">Marzo 2024 - Actualidad</time>
                            <div className="text-xl font-black">Desarrollado Web Fullstack</div>
                            <p className='text-lg font-black my-2'>InitSoluciones</p>
                            <p>
                                • Desarrollo sitios web complejos y sus funcionalidades. <br />
                                • Mantengo sitios web, añadiendo funcionalidades y corrigiendo errores.<br />
                                • Logro destacado: Desarrollo de un sistema de ecommerce completo para un mayorista de cotillón, facilitando la venta y administración de pedidos. <br />
                                • Tecnologías: PHP, Laravel, React.js, MySQL, Javascript, HTML, CSS, Tailwind CSS, Firebase. <br />
                                • Mantenimiento proactivo y optimización de sitios web.
                            </p>
                        </div>
                        <hr className='bg-primary'/>
                    </li>
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono">Junio 2022 - Enero 2024</time>
                            <div className="text-xl font-black">Desarrollado Web Fullstack</div>
                            <p className='text-lg font-black my-2'>Telematica SRL</p>
                            <p>
                                • Creación y prueba de sitios web personalizados, garantizando alineación con
                                requisitos y expectativas. <br />
                                • Implementación eficiente en producción, asegurando disponibilidad y rendimiento
                                óptimo. <br />
                                • Soporte técnico integral para clientes, abordando consultas sobre sitios web,
                                servidores y correos. <br />
                                • Administración exitosa de servidores web y de correo electrónico. <br />
                                • Mantenimiento proactivo y optimización de sitios web.
                            </p>
                        </div>
                        <hr className='bg-primary'/>
                    </li>
                    {/* <li>
                        <hr className='bg-primary'/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono">Agosto 2020 - Agosto 2021</time>
                            <div className="text-xl font-black">Representante de atención telefónica</div>
                            <p className='text-lg font-black my-2'>Teleperformance</p>
                            <p>
                                • Soporte técnico y resolución de problemas para servicios como TV e Internet. <br />
                                • Guía en preguntas de facturación, proporcionando información clara. <br />
                                • Ventas exitosas, destacando beneficios clave. <br />
                            </p>
                        </div>
                        <hr className='bg-primary'/>
                    </li> */}

                </ul>
            </div>

        </>
    )
}

export default SeccionExp