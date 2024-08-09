import React from 'react'
import bitmoji from '../bitmoji_no_bg.png'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-img'>
            <img id='avatar-img' src={bitmoji} alt='avatar head'></img>
        </div>
        <div className='main-info'>
            <h1>Hi, I'm Sam!</h1>
        </div>  
    </div>
  )
}

export default Header
