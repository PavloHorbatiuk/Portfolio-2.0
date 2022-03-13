import React from 'react'
import s from './Project.module.scss'
type ProjectType = {
    img: string
    title: string
    link: string
}


function Project(props: ProjectType) {
    return (
        <div className={s.generalContainer}>
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