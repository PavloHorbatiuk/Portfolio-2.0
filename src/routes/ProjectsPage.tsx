import React from 'react'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/Projects/Projects'
import FooterPage from './FooterPage'
import Contact from "../components/contact/Contact";
import { Helmet } from 'react-helmet';

function ProjectsPage() {
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" name='description' content='projects' />
                <title>projects</title>
            </Helmet>
            <Navbar />
            <Projects />
            <Contact />
            <FooterPage />
        </div>
    )
}

export default ProjectsPage