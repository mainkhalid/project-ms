import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import Board1 from "../Assets/board1.png"
import mug2 from "../Assets/mug2.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>WHO AM I</h1>
            <p> UP-COMING FULLSTACK DEVELOPER. I create rensponsive website for my-self</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div 
            className="img-container">
                <div className="img-stack top">
                    <img src={Board1}
                    className="img" alt="khalid"/>
                </div>
                <div className="img-stack bottom">
                    <img src={mug2}
                    className="img" alt="khalid"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent