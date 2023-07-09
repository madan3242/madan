import React from 'react'

const Project = ({projectdetails}) => {
  return (
    <div className="col-lg-3">
      <div className="card m-2">
        <a href={projectdetails.link} target="_blank" rel="noopener noreferrer">
          <img src={projectdetails.logo} alt="" className="card-img-top" />
        </a>
        <div className="card-body">
          <h5 className="card-title">{projectdetails.name}</h5>
          <p className="card-text">{
            projectdetails.tags.length > 0 ? <>
            {
              projectdetails.tags.map((tag) => {
                return <span className="badge rounded-pill text-bg-secondary m-1 p-2" key={tag}>{tag}</span>
              })
            }
            </> : <></>
          }</p>
        </div>
      </div>
    </div>
  )
}

export default Project