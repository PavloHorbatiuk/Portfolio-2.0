import React from 'react'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/skills/Skills'
import Footer from "../components/footer/Footer";
import Contact from '../components/contact/Contact'
import { Helmet } from 'react-helmet'

function MainPage() {
    return (
        <>
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" name='description' content='my portfolio' />
                <title>home</title>
            </Helmet>
            <Main />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default MainPage