import React from 'react'
import './skil.css'


export type SkilType = {
    imgLink: string;
    title: string
}

function Skil(props: SkilType) {
    return (
        <div className='generalContainer'>
            <div className="contentContainer">
                <img className='img' src={props.imgLink} alt='' />
                <h5 className='title'>{props.title}</h5>
            </div>
        </div>
    )
}

export default Skil