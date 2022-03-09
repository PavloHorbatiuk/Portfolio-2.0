import React from 'react'


export type SkilType = {
    img: string;
    title: string
}

function Skil(props: SkilType) {
    return (
        <div className='container'>
            <div className="img">
                <img src={props.img} alt={props.title} />
            </div>
        </div>
    )
}

export default Skil