import React from 'react'
import './MySkills.css'

export const Skills = ({name, logo}) => {
  return (
    <div className="col-lg-3">
        <div className="skills">
            <img src={logo} alt="" />
            {name}
        </div>
    </div>
  )
}
