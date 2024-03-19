import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EnterLink from './elements/EnterLink'
import redesSociales from '../data/redesSociales'
import usePortfolio from '../hooks/usePortfolio'
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
        setShowAlert(true); // Activar la alerta
    };

    useEffect(() => {
        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, [showAlert]);

    const { clasesParaAnimacion } = usePortfolio();

    return (
        <>
            {/* REDES SOCIALES */}
            <div className='md:w-1/3 mt-10 md:mt-0'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-wrap justify-center md:grid xl:grid-cols-2 gap-5'>
                        {
                            redesSociales.map(redSocial => (
                                <Link to={redSocial.link} key={redSocial.id} target='_blank'>
                                    <div className={`rounded-3xl w-40 h-40 glassie ${clasesParaAnimacion} hover:bg-indigo-800`}>
                                        <div className='relative'>
                                            <EnterLink />
                                            <div className='flex h-40 justify-center items-center'>
                                                {redSocial.icono}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                        <button onClick={copyToClipboard}>
                            <div className={`rounded-3xl w-40 h-40 glassie ${clasesParaAnimacion} hover:bg-indigo-800`}>
                                <div className='relative'>
                                    <EnterLink />
                                    <div className='flex h-40 justify-center items-center'>
                                        <BiSolidEnvelope />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {showAlert && (
                <div className="fixed top-20 right-5 lg:right-10 transition" style={{ zIndex: '9999' }}>
                    <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Email copiado en portapapeles</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default RedesSocialesInicio