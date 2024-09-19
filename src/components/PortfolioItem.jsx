import React from 'react';
import { Link } from 'react-router-dom';
import EnterLink from './elements/EnterLink';
import usePortfolio from '../hooks/usePortfolio';
import websiteImage from '../assets/img/website_image.jpg'
import githubImage from '../assets/img/github-wallpaper-scaled.jpeg'
import '../assets/css/portfolioItem.css'

const PortfolioItem = ({ proyecto }) => {

    const { clasesParaAnimacion } = usePortfolio();
    const proyectoId = proyecto.id;

    const modalId = `my_modal_${proyectoId}`;

    const openModal = () => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    };

    const botonesAcciones = [
        {
            id: 1,
            nombre: "Ver en GitHub",
            imagen: githubImage,
            link: proyecto.github
        },
        {
            id: 2,
            nombre: "Ver sitio web",
            imagen: websiteImage,
            link: proyecto.link
        },
        {
            id: 3,
            nombre: "Más Información",
            imagen: proyecto?.imagen[0],
            link: `/portfolio/${proyectoId}`
        }
    ]

    return (

        <>
            <a className={`mx-auto ${clasesParaAnimacion} w-full`} href={`/portfolio/${proyecto.id}`} >
                <div className="mockup-browser relative border border-black bg-base-300 hidden md:block">
                    <div className="mockup-browser-toolbar">
                        <div className="input">{proyecto.link}</div>
                    </div>
                    <div className="flex justify-center bg-base-200">
                        <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                            <figure><img className='w-full' src={proyecto.imagen[0]} alt={proyecto.titulo} /></figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title">{proyecto.titulo}</h2>
                                <h3>{proyecto.bajada}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mockup-phone md:hidden mx-auto border-amber-950">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                        <div className="card w-full h-full bg-base-100 shadow-xl image-full">
                            <figure><img className='w-full' src={proyecto.imagen[0]} alt={proyecto.titulo} /></figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title">{proyecto.titulo}</h2>
                                <h3>{proyecto.bajada}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </a>

            <dialog id={modalId} className="modal modal-middle sm:modal-middle">
                <form method="dialog" className="modal-box glassie p-0" style={{ maxWidth: "60rem" }}>
                    <button className="btn btn-sm btn-circle absolute right-2 top-2 z-30">✕</button>

                    <div className='lg:flex overflow-hidden'>
                        {
                            botonesAcciones.map(boton => (
                                <div className='w-80 lg:w-96 h-52 lg:h-96 flex justify-center items-center bg-cover bg-no-repeat bg-center modal-portfolio' style={{ backgroundImage: `url(${boton.imagen})` }} key={boton.id}>
                                    <div className='overlay-modal-portfolio'></div>
                                    <Link
                                        to={boton.link}
                                        className="btn btn-info z-30"
                                    // target={(proyecto.github === '' || proyecto.link === '') ? "_blank" : ""}
                                    >{boton.nombre}</Link>
                                </div>
                            ))
                        }
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default PortfolioItem;
