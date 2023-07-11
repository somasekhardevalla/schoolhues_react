import React from 'react'
import work from '../images/Work Background Video.mp4'

const  Video=()=> {

  return (
    <div className='video'>
        <div className="overlay"></div>
     <video id="myVideo" autoPlay muted loop>
  <source src={work} type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>
<div className="content-vid">
    <span className='video-class'>Candidate</span>
    <h1>Find Your dream job</h1>
    <p >Recruiters looking for talent can find your resume based on <br /> keywords, job titles, skills and more.</p>
    <div className="allscholls">
          <a href=""><button className='all-scl-btn'>Post a resume today</button></a>
        </div>
</div>
    </div>
  )
}
export default Video
