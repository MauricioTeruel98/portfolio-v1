import React from 'react'
import proyectosPortfolio from '../data/proyectos'
import PortfolioItem from './PortfolioItem'
import { Link } from 'react-router-dom'

const SeccionPortfolio = () => {

    return (
        <>
            <div className='mt-20'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2 className='text-4xl'>PORTFOLIO</h2>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-20'>
                {
                    proyectosPortfolio.slice(0, 6).map(proyecto => (
                        <PortfolioItem proyecto={proyecto} key={proyecto.id} />
                    ))
                }
            </div>

            <div className='w-full flex justify-center mt-10'>
                <Link to={'/'} className="btn btn-secondary rounded-full">
                    Ver Todos
                </Link>
            </div>
        </>
    )
}

export default SeccionPortfolio