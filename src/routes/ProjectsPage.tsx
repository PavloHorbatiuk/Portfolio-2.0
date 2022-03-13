import React from 'react'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import FooterPage from './FooterPage'

function ProjectsPage() {
    return (
        <div>
            {/* <Navbar /> */}

            <Projects />
            <Main />
            <FooterPage />
        </div>
    )
}

export default ProjectsPage