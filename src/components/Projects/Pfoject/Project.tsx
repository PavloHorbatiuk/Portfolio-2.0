import React from 'react'
import { Helmet } from 'react-helmet'
import s from './Project.module.scss'
type ProjectType = {
    img: string
    title: string
    link: string
}


function Project(props: ProjectType) {
    return (
        <div className={s.generalContainer}>
            <Helmet>
                <meta charSet="utf-8" name='description' content='my projects' />
                <title>projects</title>
            </Helmet>
            <div className={s.contnent}>
                <div>
                    <img className={s.img} src={props.img} alt={`${props.title} Project`} />
                </div>
                <div className={s.desctiption}>
                    <div className={s.title}>
                        <span> {props.title}</span>
                    </div>
                    <div className={s.buttonTitle}>
                        <a href={props.link} > View project</a>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Project