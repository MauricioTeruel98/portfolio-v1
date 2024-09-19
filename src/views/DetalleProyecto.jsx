import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import proyectosPortfolio from '../data/proyectos';
import { BiLogoReact, BiLogoJavascript } from 'react-icons/bi'
import { RiSupabaseFill } from "react-icons/ri";
import { FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const DetalleProyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const proyectoEncontrado = proyectosPortfolio.find(p => p.id === parseInt(id));
        setProyecto(proyectoEncontrado);
    }, [id]);

    const tecnologiaIconoMapping = {
        react: <BiLogoReact />,
        node: <FaNodeJs />,
        mongo: <SiMongodb />,
        tailwind: <SiTailwindcss />,
        bootstrap: <FaBootstrap />,
        laravel: <FaLaravel />,
        mysql: <SiMysql />,
        nextjs: <TbBrandNextjs />,
        javascript: <BiLogoJavascript />,
        supabase: <RiSupabaseFill />
    };

    return (
        <>
            <div className='w-full mx-auto mt-20'>
                <div className='w-11/12 mx-auto lg:flex gap-5'>
                    <div className='w-full lg:w-1/2 rounded-2xl'>
                        <div className="carousel w-full rounded-xl md:rounded-3xl">
                            {
                                proyecto.imagen && proyecto.imagen.map((img, index) => (

                                    <div id={`slide${index + 1}`} className="carousel-item relative w-full rounded-xl md:rounded-3xl" key={index}>
                                        <img src={img} alt={proyecto.titulo} className='rounded-xl md:rounded-3xl' />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#slide${index}`} className="btn btn-circle">❮</a>
                                            {index < proyecto.imagen.length - 1 && (
                                                <a href={`#slide${index + 2}`} className="btn btn-circle">❯</a>
                                            )}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-2xl p-5'>
                        <h1 className='text-6xl md:text-8xl font-semibold'>{proyecto.titulo}</h1>
                        <Link to={proyecto.link} target='_blank' className='text-lg underline text-accent'>{proyecto.link}</Link>
                        <div className="divider"></div>
                        <h2 className='text-xl'>{proyecto.bajada}</h2>
                        <p className='mt-10'>
                            {proyecto.contenido}
                        </p>

                        <p className='mt-20 font-bold text-accent text-xl'>Tecnologías útilizadas:</p>
                        {proyecto.tecnologias && proyecto.tecnologias.length > 0 && (
                            <ul className='flex gap-7 flex-wrap justify-center md:justify-normal mt-5'>
                                {proyecto.tecnologias && proyecto.tecnologias.map((tec, index) => (
                                    Object.values(tec)[0] && (
                                        <li key={index}>
                                            {tecnologiaIconoMapping[Object.keys(tec)[0]]}
                                        </li>
                                    )
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                    <div className="divider"></div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default DetalleProyecto;
