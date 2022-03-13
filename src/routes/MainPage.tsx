import React from 'react'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/skills/Skills'

function MainPage() {
    return (
        <>
            <Navbar />
            <Main />
            <Skills />
            <Projects />
        </>
    )
}

export default MainPage