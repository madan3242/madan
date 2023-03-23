import React from 'react'
import './MySkills.css'
import { Skills } from './Skills'

import html from '../../assets/logos/html.png'
import css from '../../assets/logos/css.png'
import js from '../../assets/logos/js.png'
import bs from '../../assets/logos/bs.png'
import react from '../../assets/logos/react.png'
import redux from '../../assets/logos/redux.png'
import express from '../../assets/logos/express.png'
import node from '../../assets/logos/node.png'
import mongodb from '../../assets/logos/mongodb.png'
import mysql from '../../assets/logos/mysql.png'
import git from '../../assets/logos/git.png'
import github from '../../assets/logos/github.png'

const MySkills = () => {
    const skills = [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JavaScript", logo: js },
        { name: "Bootstrap", logo: bs },
        { name: "React", logo: react },
        { name: "Redux", logo: redux },
        { name: "Nodejs", logo: node },
        { name: "Express", logo: express },
        { name: "MongoDB", logo: mongodb },
        { name: "MySQL", logo: mysql },
        { name: "Git", logo: git },
        { name: "Github", logo: github },
      ]
  return (
    <>
      <div className="myskills-bgc" id="myskills">
      <div className="container myskills">
          <div className="row">
            <div className="col mx-auto">
              <h2>My Skills</h2>
            </div>
          </div>
          <div className="row">
          { skills.length > 0 ? <>
            { skills.map((skill) => {
              return <Skills name={skill.name} logo={skill.logo} key={skill.name} />
            })}
          </> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default MySkills