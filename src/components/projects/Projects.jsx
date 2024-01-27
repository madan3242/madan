import React from "react";
import Project from "./Project";
import Appvilla from "../../assets/apps/appvilla.png";
import AddToCart from "../../assets/apps/addtocart.png";
import Serenity from "../../assets/apps/serenity.png";
import WeatherApp from "../../assets/apps/WeatherApp.png";
import TodoApp from "../../assets/apps/TodoApp.png";
import SocialApp from "../../assets/apps/SocialApp.png";
import BookingApp from "../../assets/apps/BookingApp.png";
import Employee from "../../assets/apps/employee.png";
import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      name: "Add To Cart",
      logo: AddToCart,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/Add-To-Cart",
      live: "",
      description: "Ecommerce application built using MERN stack"
    },
    {
      name: "Appvilla clone",
      logo: Appvilla,
      tags: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/madan3242/Appvilla",
      live: "https://appvilla.vercel.app/",
      description: "Appvilla clone built using HTML, CSS and Bootstrap. It's a landing page."
    },
    {
      name: "Serenity clone",
      logo: Serenity,
      tags: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/madan3242/serenity",
      live: "https://serenity-five.vercel.app/",
      description: "Serenity clone built using HTML, CSS and Bootstrap. It's a landing page."
    },
    {
      name: "Weather App",
      logo: WeatherApp,
      tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      github: "https://github.com/madan3242/React-Js/tree/main/Apps/WeatherApp",
      live: "https://github.com/madan3242/React-Js/tree/main/Apps/WeatherApp",
      description: "Weather App built on React. It fetch's the weather data from WeatherAPI"
    },
    {
      name: "Employee Management",
      logo: Employee,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/Employee-Management-System",
      live: "https://github.com/madan3242/Employee-Management-System",
      description: "Employee Management System is MERN app built to demonstrate the working of CRUD"
    },
    {
      name: "Social App",
      logo: SocialApp,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/MERN/tree/main/SocialApp",
      live: "https://github.com/madan3242/MERN/tree/main/SocialApp",
      description: "Social media application built using MERN stack"
    },
    {
      name: "Booking App",
      logo: BookingApp,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/MERN/tree/main/BookingApp",
      live: "https://github.com/madan3242/MERN/tree/main/BookingApp",
      description: "Hotel booking application built using MERN stack"
    },
    {
      name: "Todo App",
      logo: TodoApp,
      tags: ["HTML", "CSS", "JavaScript", "React", "Context API", "Bootstrap"],
      github: "https://github.com/madan3242/React-Js/tree/main/Apps/TodoApp",
      live: "https://github.com/madan3242/React-Js/tree/main/Apps/TodoApp",
      description: "Todo application built on React"
    },
  ];
  return (
    <>
      <Container className="myprojects" id="myprojects">
        <Row>
          <Col>
            <h2 className="text-center">My Projects</h2>
          </Col>
        </Row>
        <Row>
          {projects.length > 0 ? (
            <>
              {projects.map((project) => {
                return <Project projectdetails={project} key={project.name} />;
              })}
            </>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
