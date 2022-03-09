import React from 'react'
import './mainStyle.css'
import picture from "./../../assets/IMG_20170701_154559.jpg"
import { Parallax } from 'react-parallax';
import BackgroundImage from './../../assets/keyboard.jpg'


function Main() {

    return (
        <div className='main'>
            <Parallax
                bgImage={BackgroundImage}
                strength={200}
                bgImageStyle={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            >
                <div className='container'>
                    <div className='content'>
                        <div><h1>I'm Pavlo Horbatiuk</h1></div>
                        <span className='blue'>
                            I'm a front‑end developer focused on
                            crafting clean &amp; user‑friendly experiences, I am passionate about
                            building excellent software that improves the lives of those
                            around me.
                        </span>
                        <div>
                            <button>more</button>
                        </div>
                    </div>
                    <div className='photo'>
                        <img className='picture' src={picture} alt='/' />
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Main;