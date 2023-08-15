import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import imagenBg from '../assets/img/galaxy.jpg'
import { IconContext } from 'react-icons'
import BotonFlotante from '../components/BotonFlotante'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <div className='md:flex'>
                <IconContext.Provider value={{ style: { width: '2em', height: '2em' } }}>
                    <Sidebar />
                </IconContext.Provider>

                <main className='flex-1 h-screen overflow-y-scroll hero' style={{ backgroundImage: 'url(https://cdn.pixabay.com/animation/2022/11/16/14/56/14-56-49-778_512.gif)' }}>
                    <div className="hero-overlay bg-opacity-90"></div>
                    <Outlet />
                </main>
                <BotonFlotante />
            </div>
        </>
    )
}

export default Layout