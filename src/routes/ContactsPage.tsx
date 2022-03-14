import React from 'react'
import Navbar from '../components/navbar/navbar'
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { Helmet } from 'react-helmet';

function ContactsPage() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" name='description' content='contact' />
                <title>contact</title>
            </Helmet>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactsPage