import React from 'react'
import s from './skil.module.css'


export type SkilType = {
    imgLink: string;
    title: string
}

function Skil(props: SkilType) {
    return (
        <div className={s.generalContainer}>
            <div className={s.contentContainer}>
                <img className={s.img} src={props.imgLink} alt='' />
                <h5 className={s.title}>{props.title}</h5>
            </div>
        </div>
    )
}

export default Skil