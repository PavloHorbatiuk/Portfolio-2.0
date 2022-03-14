import React from 'react'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/skills/Skills'
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function SkillsPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" name='description' content='skills' />
                <title>skills</title>
            </Helmet>
            <Navbar />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default SkillsPage