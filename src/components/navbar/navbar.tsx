import React, { useState } from 'react';
import './navbarStyle.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav)
    return (
        <div className="navbar">
            <div className="container">
                <ul className={nav ? "navMenu active" : "navMenu"}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className="icon" />) : (<FaTimes className="icon" />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar