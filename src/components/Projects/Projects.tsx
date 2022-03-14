import React from 'react'
import Project from './Pfoject/Project'
import s from './Projects.module.scss'
import converterImg from './../../assets/currencyConverter.png'
import SocialNeworkImg from './../../assets/socialNetwork.png'
import playCards from './../../assets/playcards.png'
import todoList from './../../assets/toDoList.png'
import { Helmet } from 'react-helmet'

const Zoom = require('react-reveal/Zoom')



function Projects() {
    return (
        <div className={s.generalContainer}>
            <Helmet>
                <meta charSet="utf-8" name='description' content='my projects' />
                <title>projects</title>
            </Helmet>
            <section className={s.contentContainer}>
                <div className={s.title}>
                    <Zoom><h1>My Projects</h1></Zoom>
                </div>
                <div className={s.projectsContainer}>
                    <Project img={converterImg}
                        title={'Currency Converter'}
                        link={'https://github.com/PavloHorbatiuk/currencyConvertor '}
                    />
                    <Project img={SocialNeworkImg}
                        title={'Social network'}
                        link={'https://github.com/PavloHorbatiuk/Social-network'}
                    />
                    <Project img={todoList}
                        title={'To do list'}
                        link={'https://github.com/PavloHorbatiuk/Todolist'}
                    />
                    <Project img={playCards}
                        title={'Play Cards'}
                        link={'https://github.com/HailRase/flashcards'}
                    />
                </div>
            </section>
        </div >
    )
}

export default Projects