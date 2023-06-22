import React from 'react';
import './App.css';
import profile from './profile.jpg'
import Body from './body.js'
import SocialFollow from "./social.js"

function App() {
  
  return (
    <><meta name="viewport" content="width=device-width, initial-scale=1" /><div className='container'>

      <div className='sidebar'><img src={profile} alt='profile picture'/>
        <SocialFollow />
        <div className='contact'>
          <h1>Contact</h1>
          <h3>Address</h3>
          <div>37/18,Lalachathiram,
            kundrathur,Chennai,<br></br>
            tamilnadu-600069
          </div>
          <h3>Phone</h3>
          <div>8925456378</div>
          <h3>E-mail</h3>
          <div><a href='valliaravind@gmail.com'>valliaravind@gmail.com</a></div>
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ul>
            <li>C</li>
            <li>Python</li>
            <li>HTML</li>
            <li>Cascading Style Sheets</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className='lang'>
          <h1>Languages</h1>
          <ul>
            <li>ENGLISH</li>
            <li>TAMIL</li>
            <li>HINDI</li>
          </ul>
        </div>
      </div>
      <div className='box'>
        <div className='headbox'>
          <div> S PALAMANICKAM</div>
          <span>Student</span>
        </div>
        <div className='bodybox'><Body /></div>
      </div>
    </div></>
  );
}

export default App;
