import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import redesSociales from '../data/redesSociales'
import { IconContext } from 'react-icons'
import { BiSolidEnvelope } from 'react-icons/bi'

const Footer = () => {

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

    return (
        <>
            <footer className="footer p-10 text-neutral-content mt-20 bg-transparent">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>Mauricio Teruel<br />&copy; 2023</p>
                </div>
                <div>
                    <span className="footer-title">Redes sociales y contacto</span>
                    <div className="grid grid-flow-col gap-4">
                        <IconContext.Provider value={{ style: { width: '2em', height: '2em' } }}>
                            {
                                redesSociales.map(redSocial => (

                                    <Link key={redSocial.id} to={redSocial.link} target='_blank'>
                                        {redSocial.icono}
                                    </Link>
                                ))
                            }
                            <button onClick={copyToClipboard}>
                                <BiSolidEnvelope />
                            </button>
                        </IconContext.Provider>
                    </div>
                </div>
            </footer>

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

export default Footer