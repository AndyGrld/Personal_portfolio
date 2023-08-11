import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // For LinkedIn

function App() {
  const [mode, setMode] = useState('light_mode');

  const changeTheme = () => {
    if (mode === 'light_mode'){
      setMode('dark_mode');
    }else{
      setMode('light_mode');
    }
  }
  return (
    <div className={`App ${mode}`}>
      <header>
        <div className='navigation'>
          <h1>Ansong <span>Andy</span></h1>
          <div>
            <ul>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#exp'>Experience</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li id='theme' onClick={changeTheme}>Change Theme</li>
            </ul>
          </div>
        </div>
        <div className='hero'>
          <div className='grid'>
            <div className='col'>
              <img src='face2.jfif' alt='my profile'/>
            </div>
            <div className='col'>
              <p id='greeting'>Hi, I'm</p>
              <h1>Andy Ansong</h1>
              <p id='prof'>Web Developer | Programmer</p>
              <div className='links1'>
                <a href="https://www.linkedin.com/in/andy-ansong-b661b8232" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
                <div className='space'></div>
                <a href="https://github.com/AndyGrld" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Projects/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
