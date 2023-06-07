import React from 'react'
import './navbar.css'

// import resume from '../../assets/madan-resume.pdf'

const Navbar = () => {
  return (
    <>
        <div className="bgc">
        <div className="navbar navbar-expand-lg px-4">
            <a href="" className="navbar-brand">Madan Gowda</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-2">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a href="#aboutme" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a href="#myprojects" className="nav-link">My Projects</a>
                    </li>
                </ul>
                {/* <a href={resume} target='_blank'>
                    <button className="btn nav-btn">My Resume</button>
                </a>&nbsp;&nbsp; */}
                <a href="#contactme">
                    <button className="btn nav-btn">Let's Talk</button>
                </a>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar