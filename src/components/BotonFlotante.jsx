import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import resume from '../assets/pdf/CV_Mauricio_Teruel.pdf'

const BotonFlotante = () => {
    return (
        <>
            <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-secondary absolute bottom-5 right-5 lg:bottom-10 lg:right-20 rounded-full z-50">
                <FiExternalLink className="!w-6 !h-6" />
                Ver CV
            </a>
        </>
    )
}

export default BotonFlotante