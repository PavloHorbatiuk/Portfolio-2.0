import React from 'react';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/Skills'
import Main from "./components/main/Main";
import "./App.scss"
import './defaultStyle.scss'
import Projects from './components/Projects/Projects';
import Footer from "./components/footer/Footer";
import Contact from './components/contact/Contact';



function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
