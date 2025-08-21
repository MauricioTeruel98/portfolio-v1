import React from 'react'
import proyectosPortfolio from '../data/proyectos'
import PortfolioItem from './PortfolioItem'
import { Link } from 'react-router-dom'

const SeccionPortfolio = () => {
    return (
        <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="section-title">
                    <span className="gradient-text">Portfolio</span> de Proyectos
                </h2>
                <p className="section-subtitle">
                    Una selección de mis mejores trabajos y proyectos más destacados
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {proyectosPortfolio.slice(0, 9).map(proyecto => (
                    <PortfolioItem proyecto={proyecto} key={proyecto.id} />
                ))}
            </div>

            {/* View All Button */}
            {/* <div className="text-center pt-8">
                <Link to={'/'} className="btn-primary">
                    Ver Todos los Proyectos
                </Link>
            </div> */}
        </div>
    )
}

export default SeccionPortfolio