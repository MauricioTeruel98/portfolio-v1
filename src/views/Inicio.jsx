import React from 'react'
import RedesSocialesInicio from '../components/RedesSocialesInicio'
import PersonalInfo from '../components/PersonalInfo'
import SeccionPortfolio from '../components/SeccionPortfolio'
import Skills from '../components/Skills'
import HomeBlog from '../components/HomeBlog'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import SeccionExp from '../components/SeccionExp'

const Inicio = () => {

    return (
        <>
            <div className='w-full mx-auto mt-20'>

                <div className='w-11/12 mx-auto'>
                    <section id="inicio" className='md:flex items-center gap-10 justify-center'>
                        <PersonalInfo />
                        <RedesSocialesInicio />
                    </section>

                    <section id="skills" className='scroll-mt-20'>
                        <Skills />
                    </section>

                    <section id="experiencia" className='scroll-mt-20'>
                        <SeccionExp />
                    </section>

                    <section id="portfolio" className='scroll-mt-20'>
                        <SeccionPortfolio />
                    </section>

                    <section id="blog" className='scroll-mt-20'>
                        <HomeBlog />
                    </section>

                    <section id="contacto" className='scroll-mt-20'>
                        <Contacto />
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Inicio