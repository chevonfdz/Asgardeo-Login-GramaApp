import React from 'react'
import './HeroStyles.css'
import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>GRAMA CHECK</h1>
                <form className="form">
                </form>
                <h2>Your partner in getting a police report</h2>  
            </div>
        </div>
    )
}

export default Hero
