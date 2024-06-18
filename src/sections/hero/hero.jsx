import React from 'react'
import './hero.css'
import Animation from '../../components/animation/animation'

function Hero() {
    return (
        <div className='hero-section'>
            <div className="text-section">
                <h4>Hi, my name is  </h4>
                <h1>Vijayant Singh</h1>
                <p>I am a developer, creating beautiful and functional applications, 
                    dedicated to turning ideas into stunning digital realities.</p>
            </div>
            <div className="animation-section">
                <Animation />
            </div>
        </div>
    )
}

export default Hero
