import './body.css'
import React from "react";

function Body(){
 
 return(
    <><p className='intro'>Hardworking and passionate job seeker with strong organizational skills eager to secure intern in web development .<br></br>
    Ready to help team achieve company goals and having a full proficiency</p>
    <div className='education'>
      <h1>Education</h1>
     <div className='scl'> <h3>Higher education</h3>
      <div>JAWAHAR NAVODAYA VIDYALAYA- PUDUCHERRY</div>
      <ul><li>Elected as House captain in the year of 2020-21</li></ul>
      </div>
      <div className='clg'>
         <h3>Bachelor of Technology : Electrical and Electronics Engineering</h3>
         <div>NATIONAL INSTITUTE OF TECHNOLOGY PUDUCHERRY-karaikal ,puducherry ,india </div>
         <ul>
            <li>Member of LEAP in NIT puducherry</li>
            <li>Member of NITPY FOOTBALL TEAM</li>
            <li>GPA:8.7</li>
            <li>Elected as Treasurer for Freshers in year of 2022</li>
         </ul>
      </div>
      </div>
      <div className='work'>
         <h1>Work History</h1>
         <h3>Full Stack Webdevelopment Intern</h3>
         <div>I done a full stack developer intership in keprevos business enterprises in Puducherry .<br></br>
             I learned PHP, mySQL  with Symfony Framework in this internship.</div>
           <h3>GYANITH</h3> 
           <p>Event Coordinator</p> 
           <div>
            <ul>
               <li>A active member in gyanith publicity and marketing team</li>
               <li>Supported engaging, fun, and smooth-running events by helping with organization and planning.<br></br>Skilled at working
                   independently and collaboratively in a team environment .</li>         
            </ul>
           </div>
           <h3>SELENITZ</h3>
           <p>Treasurer , Freshers 2022</p>
      </div>
      <div className='kizhicha'>
      <h1>Accomplishments</h1>
      <ul>
         <li>Developed a movie search engine using React.js Framework</li>
         <li>Github link :<br></br><a href='https://github.com/Palamanickam0806/Movie_engine.git'>https://github.com/Palamanickam0806/Movie_engine.git</a></li>
         <li>Currently developing a Learning management website for LEAP in NIT puducherry</li>
      </ul>
      </div>
      </>
 );
    
}

export default Body;