import React from 'react'
import Skil from './skil/Skil'
import './skillsStyle.css'
import css from './../../assets/Skills/CSS.579efed0.svg'

function Skills() {
    return (
        <div className='skills'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h1>Skills</h1>
                        <Skil img={css} title={"css"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills