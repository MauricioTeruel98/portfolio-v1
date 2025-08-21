import React from 'react'
import NavBar from './NavBar'
import menuItems from '../data/menuItems'
import { useSmoothScroll } from '../hooks/usePortfolio'

const Sidebar = () => {
    const { scrollToSection } = useSmoothScroll()

    const handleNavigation = (sectionId) => {
        scrollToSection(sectionId)
    }

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className='hidden md:block fixed left-0 top-0 h-screen w-20 bg-dark-900/80 backdrop-blur-md border-r border-dark-700/50 shadow-2xl z-50'>
                <div className="flex flex-col items-center py-8 space-y-6">
                    {/* Logo/Profile */}
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">MT</span>
                    </div>
                    
                    {/* Navigation Menu */}
                    <nav className="flex flex-col space-y-4">
                        {menuItems.map(item => {
                            const sectionId = item.link.split('#')[1] || 'inicio'
                            return (
                                <button 
                                    key={item.id}
                                    className='group relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-dark-800/80 transition-all duration-300 hover:scale-110'
                                    onClick={() => handleNavigation(sectionId)}
                                    title={item.nombre}
                                >
                                    <div className="text-gray-400 group-hover:text-accent-400 transition-colors duration-300">
                                        {item.icono}
                                    </div>
                                    
                                    {/* Tooltip */}
                                    <div className="absolute left-full ml-3 px-3 py-2 bg-dark-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                        {item.nombre}
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-0 border-r-4 border-t-4 border-b-4 border-transparent border-r-dark-800"></div>
                                    </div>
                                </button>
                            )
                        })}
                    </nav>
                    
                    {/* Bottom accent line */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full"></div>
                </div>
            </aside>

            {/* Mobile Navigation */}
            <NavBar menuItems={menuItems}/>
        </>
    )
}

export default Sidebar