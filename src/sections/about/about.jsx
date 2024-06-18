import React from 'react'
import './about.css'
import Image from './../../assets/photo.jpg'


function About() {
  return (
    <section>
      <div className="section-heading">
        <span className='accent'>01.</span>About Me
      </div>
      <div className="section-content">
        <div className="profile-image">
        <img src={Image} className="profileImage" />
        </div>
        <div className="about-description">
            <p>Hello! My name is Vijayant Singh and I am a final year CSE 
            student at DIT University, Dehradun. My interest lies in 
            developing mobile applications with <span>Flutter</span>. I have been 
            working with flutter since 2022 when I participated in a 
            hackathon with my team. I am also well adept at Web development 
            using <span>ReactJS</span> and <span>NodeJS</span>.</p>

            <p>My main focus is to build high-quality, user-friendly 
                applications that provide seamless user experiences and 
                solve real-world problems through innovative solutions.</p>
        </div>
      </div>
    </section>
  )
}

export default About
