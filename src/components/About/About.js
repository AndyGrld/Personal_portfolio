import React from 'react'
import './style.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <h1 id='a_header'>
            <span>Get to know</span><br/>
            About me
        </h1>
        <div className='a_grid'>
            <div className='a_col'>
                <img src='body.png' alt='profile'/>
            </div>
            <div className='a_col'>
              <p>
                Hello! I'm Gerald Andy Ansong, an enthusiastic and
                dedicated web developer with a strong passion for
                crafting elegant and functional web solutions.
                I thrive on transforming innovative ideas into
                tangible, user-friendly experiences.
              </p>
            </div>
        </div>
    </div>
  )
}

export default About