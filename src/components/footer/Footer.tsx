import React from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { BsTelegram } from 'react-icons/bs'
import './Footer.scss'

const Zoom = require('react-reveal/Zoom')

const Footer = () => {
    return (
        <div className='footer'>
            <div className="title">
                <Zoom> <span>Stay in Touch</span></Zoom>
                <div className="icons">
                    <a href='https://www.instagram.com/pasha.norfolk/'><FiInstagram className='social-icon' /></a>
                    <a href='https://www.facebook.com/norfolk.pasha/'><FiFacebook className='social-icon' /></a>
                    <a href='https://www.linkedin.com/in/pavlo-horbatiuk'><FiLinkedin className='social-icon' /></a>
                    <a href='https://t.me/PashaHorbatiuk'><BsTelegram className='social-icon' /></a>
                    <a href='https://github.com/PavloHorbatiuk'><FiGithub className='social-icon' /></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;
