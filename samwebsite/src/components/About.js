import React from 'react'
import bitmoji from '../bitmoji_no_bg.png'

const About = () => {
  return (
    <div id='about' className='about-section'>  
    <div></div>
        <div className='avatar-img'>
            <img className='bitmoji' src={bitmoji} alt='bitmoji'></img>
        </div>
        <div className='about-paragraph'>
            <p>Hi there! Info about myself here.</p>
            <button type="button" class="btn btn-outline-light">Resume</button>
        </div>
        <div></div>
    </div>
  )
}

export default About
