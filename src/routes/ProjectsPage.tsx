import React from 'react'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import FooterPage from './FooterPage'
import Contact from "../components/contact/Contact";

function ProjectsPage() {
    return (
        <div>
            <Navbar/>
            <Projects/>
            <Contact/>
            <FooterPage/>
        </div>
    )
}

export default ProjectsPage