import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import BotonFlotante from '../components/BotonFlotante'

const Layout = () => {
    return (
        <div className="min-h-screen bg-dark-950">
            <Sidebar />
            
            <main className='min-h-screen overflow-y-auto bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 md:ml-20'>
                <div className="relative">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #0ea5e9 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}></div>
                    </div>
                    
                    <div className="relative z-10">
                        <Outlet />
                    </div>
                </div>
            </main>
            
            <BotonFlotante />
        </div>
    )
}

export default Layout