import React from 'react'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/skills/Skills'
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

function SkillsPage() {
    return (
        <>
            <Navbar/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default SkillsPage