import React from 'react'
import RedesSocialesInicio from '../components/RedesSocialesInicio'
import PersonalInfo from '../components/PersonalInfo'
import SeccionPortfolio from '../components/SeccionPortfolio'
import Skills from '../components/Skills'
import HomeBlog from '../components/HomeBlog'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

const Inicio = () => {

    return (
        <>
            <div className='w-full mx-auto mt-20'>

                <div className='w-11/12 mx-auto'>
                    <section className='md:flex items-center gap-10 justify-center'>
                        <PersonalInfo />
                        <RedesSocialesInicio />
                    </section>

                    <section>
                        <Skills />
                    </section>

                    <section>
                        <SeccionPortfolio />
                    </section>

                    <section>
                        <HomeBlog />
                    </section>

                    <section>
                        <Contacto />
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Inicio