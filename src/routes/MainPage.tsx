import React from 'react'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/skills/Skills'
import Footer from "../components/footer/Footer";

function MainPage() {
    return (
        <>
            <Navbar/>
            <Main/>
            <Skills/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default MainPage