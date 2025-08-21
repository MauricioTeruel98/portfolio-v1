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

            <aside className='hidden md:block md:w-20 bg-neutral border-r-slate-700 border-r shadow-lg'>
                <ul className="menu rounded-box mt-5 z-50">
                    {
                        menuItems.map(item => {
                            const sectionId = item.link.split('#')[1] || 'inicio'
                            return (
                                <li className="tooltip tooltip-right tooltip-accent my-3 hover:scale-110 transition duration-200 ease-in-out z-50" data-tip={item.nombre} key={item.id}>
                                    <button 
                                        className='flex justify-center w-full h-full p-3 hover:bg-base-300 rounded-lg transition-colors'
                                        onClick={() => handleNavigation(sectionId)}
                                    >
                                        {item.icono}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>


            <NavBar menuItems={menuItems}/>
        </>
    )
}

export default Sidebar