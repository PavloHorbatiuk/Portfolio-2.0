import React from 'react'
import './skillsStyle.css';
import Skil from './skil/Skil';
import reactImg from './../../assets/Skills/react.png'




function Skills() {
    return (
        <div className='generalContainer'>
            <section className='contentContainer'>
                <div className="skillsContainer">
                    <Skil title={'React'} imgLink={reactImg} />
                </div >
            </section >
        </div >
    )
}

export default Skills





{/* <div className="content">
                    <div className="title">
                        <h1>Skills</h1>
                    </div>
                    <div className='icons'>
                        <div className="icons-first-block">
                            <div>
                                <SiTypescript className='ts' />
                                <span>TypeScript</span>
                            </div>
                            <div  >
                                <SiReact className="react" />
                                <span>React</span>
                            </div>
                            <div >
                                <BsGithub className="git" />
                                <span>Git</span>
                            </div>
                            <div >
                                <AiFillHtml5 className="html" />
                                <span>HTML</span>
                            </div>
                        </div>
                        <div className="icons-second-block">
                            <div >
                                <SiCsswizardry className="css" />
                                <span>CSS</span>
                            </div>
                            <div >
                                <SiRedux className="redux" />
                                <span>Redux</span>
                            </div>
                            <div>
                                <SiPostman className='postman' />
                                <span>Postman</span>
                            </div>
                            <div>
                                <SiJavascript className='javascript' />
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}