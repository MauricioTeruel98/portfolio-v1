import React from 'react'

const NavBar = ({ menuItems }) => {
    return (
        <>
            <div className="flex md:hidden navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-neutral rounded-box w-52">
                            {
                                menuItems.map(item => (
                                    <li className='my-3' key={item.id}><a>{item.icono} {item.nombre}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar