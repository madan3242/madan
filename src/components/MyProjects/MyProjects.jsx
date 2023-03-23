import React from 'react'
import './MyProjects.css'
import Project from './Project'

import Appvilla from '../../assets/apps/appvilla.png'
import Serenity from '../../assets/apps/serenity.png'
import WeatherApp from '../../assets/apps/WeatherApp.png'
import TodoApp from '../../assets/apps/TodoApp.png'
import Product from '../../assets/apps/ProductCrud.png'
import User from '../../assets/apps/UserModule.png'
import SocialApp from '../../assets/apps/SocialApp.png'
import BookingApp from '../../assets/apps/BookingApp.png'

const MyProjects = () => {
    const projects = [
        { name: "Appvilla", logo: Appvilla, tags: ["HTML", "CSS", "Bootstrap"], link: "https://appvilla.vercel.app/" },
        { name: "Serenity", logo: Serenity, tags: ["HTML", "CSS", "Bootstrap"], link: "https://serenity-five.vercel.app/" },
        { name: "Weather App", logo: WeatherApp, tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"], link: "https://github.com/madan3242/React-Js/tree/main/Apps/WeatherApp" },
        { name: "Todo App", logo: TodoApp, tags: ["HTML", "CSS", "JavaScript", "React", "Context API", "Bootstrap"], link: "https://github.com/madan3242/React-Js/tree/main/Apps/TodoApp" },

        { name: "Product CRUD", logo: Product, tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"], link: "https://github.com/madan3242/MERN/tree/main/product-crud" },
        { name: "User Module", logo: User, tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"], link: "https://github.com/madan3242/MERN/tree/main/user-module" },
        { name: "Social App", logo: SocialApp, tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"], link: "https://github.com/madan3242/MERN/tree/main/SocialApp" },
        { name: "Booking App", logo: BookingApp, tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"], link: "https://github.com/madan3242/MERN/tree/main/BookingApp" },
    ]
  return (
    <>
        <div className="container myprojects" id="myprojects">
            <div className="row">
                <div className="col-lg">
                    <h2 className="text-center">My Projects</h2>
                </div>
            </div>
            <div className="row">
                {
                    projects.length > 0 ? <>
                    {
                        projects.map((project) => {
                            return <Project projectdetails={project} key={project.name} />
                        })
                    }
                    </> : <></>
                }
            </div>
        </div>
    </>
  )
}

export default MyProjects