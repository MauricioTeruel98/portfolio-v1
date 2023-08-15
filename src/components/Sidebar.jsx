import React from 'react'
import NavBar from './NavBar'
import menuItems from '../data/menuItems'

const Sidebar = () => {

    return (
        <>

            <aside className='hidden md:block md:w-20 bg-neutral border-r-slate-700 border-r shadow-lg'>
                <ul className="menu rounded-box mt-5 z-50">
                    {
                        menuItems.map(item => (
                            <li className="tooltip tooltip-right tooltip-accent my-3 hover:scale-110 transition duration-200 ease-in-out z-50" data-tip={item.nombre} key={item.id}>
                                <a className='flex justify-center'>
                                    {item.icono}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </aside>


            <NavBar menuItems={menuItems}/>
        </>
    )
}

export default Sidebar