import React from 'react'
import './style.css'

const Projects = () => {
  return (
    <div id='projects'>
        <h1 className='p_left'>
            <span>Here are some of</span><br/>
              My Projects
        </h1>
        <div className='p_right'>
            <div className='container'>
              <p>Game Showcase Website</p>
              <img src='hero_image.png' alt='game showcase'/>
              <div className='overlay'>
                <a href='https://game-showcase-website.vercel.app/'><button>View Live</button></a>
                <a href='https://github.com/AndyGrld/game_showcase_website'><button>View Github</button></a>
              </div>
            </div>
            <div className='container'>
              <p>Loan Management Website</p>
              <img src='loan_manage.png' alt='loan management'/>
              <div className='overlay'>
                <a href='https://github.com/AndyGrld/Loan-System'><button>View Github</button></a>
              </div>
            </div>
            <div className='container'>
              <p>Online Bookshop</p>
              <img src='book_shop.png' alt='online bookshop'/>
              <div className='overlay'>
                <p></p>
                <a href='https://github.com/AndyGrld/Bookstore'><button>View Github</button></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects