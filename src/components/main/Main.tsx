import React from 'react'
import s from './mainStyle.module.scss'
import picture from "./../../assets/IMG_20170701_154559.jpg"
import { Parallax } from 'react-parallax';
import BackgroundImage from './../../assets/keyboard.jpg';
import { Helmet } from "react-helmet"


function Main() {


    return (
        <div>
         
            <Parallax
                bgImage={BackgroundImage}
                strength={200}
                bgImageStyle={{ width: "100vw", height: "100vh", objectFit: "cover" }
                }
            >
                <div className={s.container}>
                    <div className={s.content}>
                        <div>
                            <h1><span>I'm</span> Pavlo Horbatiuk</h1>
                        </div>
                        <p className={s.text}>
                            I'm a front‑end developer focused on
                            crafting clean &amp; user‑friendly experiences, I am passionate about
                            building excellent software that improves the lives of those
                            around me.
                        </p>

                        <div>
                            <a href={require("./../../assets/Resume/PavloHorbatiukCV.pdf")} download="CV">
                                <button> Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className={s.photo}>
                        <img className={s.picture} src={picture} alt='/' />
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Main;