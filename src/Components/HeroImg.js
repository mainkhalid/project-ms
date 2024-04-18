import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from '../Assets/intro.jpg'

import {Link} from 'react-router-dom'

const Heroimg = () => {
  return (
<div className="hero">
   <div className="mask">
        <img className="intro-img"
        src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HI,I'M A FREELANCER</p>
        <h1>Web Developer</h1>
        <div>
            <Link to="/projects" 
            className="btn">projects</Link>
            <Link to="/Contact" 
            className=" btn btn-light"
            >Contact</Link>
        </div>
   </div>
  </div>
  )
}

export default Heroimg