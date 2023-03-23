import React from 'react'
import './Aboutme.css'

const AboutMe = () => {
  return (
    <>
        <div className="container aboutme" id="aboutme">
          <div className="row">
            <div className="col mx-auto">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p>
                Hi, I'm Madan Gowda. A Full Stack Web Developer .
                I am specialized in devloping responsive websites and web applications.
                Good at both front-end and back-end technologies like HTML, CSS, Javascript, React, Redux, Node, Express, Bootstrap, Git etc. 
              </p>
              <p>I'm currently working on MERN stack projects and learning TypeScript and NextJS. 
                I'm looking to collabrate on MERN stack projects.</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutMe