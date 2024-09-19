import React from 'react'
import { FiDownload } from 'react-icons/fi'

const BotonFlotante = () => {
    return (
        <>
            <a
                href={`../assets/pdf/${import.meta.env.VITE_NOMBRE_CURRICULUM_PARA_DESCARGA}.pdf`}
                download={import.meta.env.VITE_NOMBRE_CURRICULUM_PARA_DESCARGA}
                className="btn btn-lg btn-secondary absolute bottom-5 right-5 lg:bottom-10 lg:right-20 rounded-full z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Descargar CV
            </a>
        </>
    )
}

export default BotonFlotante