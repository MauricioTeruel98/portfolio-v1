import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RedesSocialesInicio from '../components/RedesSocialesInicio'
import PersonalInfo from '../components/PersonalInfo'
import SeccionPortfolio from '../components/SeccionPortfolio'
import SeccionGitHub from '../components/SeccionGitHub'
import Skills from '../components/Skills'
import HomeBlog from '../components/HomeBlog'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import SeccionExp from '../components/SeccionExp'

const Inicio = () => {
    const location = useLocation()

    useEffect(() => {
        // Si hay un hash en la URL, hacer scroll a esa sección
        if (location.hash) {
            const sectionId = location.hash.substring(1) // Remover el #
            const element = document.getElementById(sectionId)
            if (element) {
                // Pequeño delay para asegurar que el DOM esté listo
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }, 100)
            }
        }
    }, [location.hash])

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section id="inicio" className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <PersonalInfo />
                        <RedesSocialesInicio />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <Skills />
                </div>
            </section>

            {/* Experience Section */}
            <section id="experiencia" className="py-20 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <SeccionExp />
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <SeccionPortfolio />
                </div>
            </section>

            {/* GitHub Section */}
            <section id="github" className="py-20 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <SeccionGitHub />
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <HomeBlog />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-20 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <Contacto />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Inicio