import React, { useState } from 'react'
import './navbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav)
    return (
        <div className='navbar'>
            <div className='container'>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li >Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar