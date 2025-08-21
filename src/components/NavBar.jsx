import React, { useState } from 'react'
import { useSmoothScroll } from '../hooks/usePortfolio'
import { FiMenu, FiX } from 'react-icons/fi'

const NavBar = ({ menuItems }) => {
    const { scrollToSection } = useSmoothScroll()
    const [isOpen, setIsOpen] = useState(false)

    const handleNavigation = (sectionId) => {
        scrollToSection(sectionId)
        setIsOpen(false)
    }

    return (
        <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700/50">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">MT</span>
                        </div>
                        <span className="text-white font-semibold">Mauricio Teruel</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 bg-dark-800/50 hover:bg-dark-700/70 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-dark-600/50"
                    >
                        {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-4 pb-4 animate-fade-in">
                        <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 rounded-xl p-4 space-y-2">
                            {menuItems.map(item => {
                                const sectionId = item.link.split('#')[1] || 'inicio'
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavigation(sectionId)}
                                        className="w-full flex items-center space-x-3 p-3 text-left text-gray-300 hover:text-white hover:bg-dark-700/50 rounded-lg transition-all duration-300"
                                    >
                                        <div className="text-accent-400">
                                            {item.icono}
                                        </div>
                                        <span className="font-medium">{item.nombre}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar