import React from 'react'
import s from './skillsStyle.module.scss'
import Skil from './skil/Skil';
import reactImg from './../../assets/Skills/react.png'
import tsImg from './../../assets/Skills/typescript.png'
import htmlImg from './../../assets/Skills/HTML.png'
import gitImg from './../../assets/Skills/git.png'
import cssImg from './../../assets/Skills/css.png'
import reduxImg from './../../assets/Skills/redux.png'
import postmanImg from './../../assets/Skills/postman.png'
import jsImg from './../../assets/Skills/1720372_code_javascript_js_icon.png'
const Zoom = require('react-reveal/Zoom')


function Skills() {

    return (
        <div className={s.generalContainer}>
            <section className={s.contentContainer}>
                <div className={s.title}>
                    <Zoom><h1>Skills</h1></Zoom>
                </div>
                <div className={s.skillsContainer}>
                    <Skil title={'React'} imgLink={reactImg} />
                    <Skil title={'TypeScript'} imgLink={tsImg} />
                    <Skil title={'GIT'} imgLink={gitImg} />
                    <Skil title={'HTML'} imgLink={htmlImg} />
                    <Skil title={'CSS'} imgLink={cssImg} />
                    <Skil title={'Redux'} imgLink={reduxImg} />
                    <Skil title={'Postman'} imgLink={postmanImg} />
                    <Skil title={'JavaScript'} imgLink={jsImg} />
                </div>
            </section>
        </div>
    )
}

export default Skills
