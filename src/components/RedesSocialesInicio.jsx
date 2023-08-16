import React from 'react'
import { Link } from 'react-router-dom'
import EnterLink from './elements/EnterLink'
import redesSociales from '../data/redesSociales'
import usePortfolio from '../hooks/usePortfolio'

const RedesSocialesInicio = () => {

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
                    </div>
                </div>
            </div>
        </>
    )
}

export default RedesSocialesInicio