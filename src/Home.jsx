import React, { useEffect, useRef } from "react";
import { Col, Container, Row, Nav, Navbar as ReactNavbar, Card, Form, Button } from "react-bootstrap";
import Typed from "typed.js";
import { Fade } from "react-awesome-reveal";
import { AiOutlineHome } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

import html from "./assets/logos/html.png";
import css from "./assets/logos/css.png";
import js from "./assets/logos/js.png";
import bs from "./assets/logos/bs.png";
import react from "./assets/logos/react.png";
import redux from "./assets/logos/redux.png";
import express from "./assets/logos/express.png";
import node from "./assets/logos/node.png";
import mongodb from "./assets/logos/mongodb.png";
import mysql from "./assets/logos/mysql.png";
import git from "./assets/logos/git.png";
import github from "./assets/logos/github.png";

import Appvilla from "./assets/apps/appvilla.png";
import AddToCart from "./assets/apps/addtocart.png";
import Serenity from "./assets/apps/serenity.png";
import WeatherApp from "./assets/apps/WeatherApp.png";
import TodoApp from "./assets/apps/TodoApp.png";
import SocialApp from "./assets/apps/SocialApp.png";
import BookingApp from "./assets/apps/BookingApp.png";
import Employee from "./assets/apps/employee.png";

import github2 from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'

const Home = () => {
    const el = useRef(null);

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
    ];

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

    const d = new Date();
    const year = d.getFullYear();

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer.", "React.js Developer.", "Node.js Developer."],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        })

        return () => {
            typed.destroy();
        }
    });
    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ReactNavbar style={{ position: "fixed" }}>
                    <Container>
                        <Nav className="text-center mx-auto">
                            <Nav.Item className="mx-2">
                                <a href="#home" className="nav-link">
                                    <AiOutlineHome size={35} />
                                </a>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <a href="#aboutme" className="nav-link">
                                    <GrEmoji size={35} />
                                </a>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <a href="#myprojects" className="nav-link">
                                    <CgWebsite size={35} />
                                </a>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <a href="#contactme" className="nav-link">
                                    <GoMail size={35} />
                                </a>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </ReactNavbar>
            </div>
            <div>
                <Fade direction="down" delay="1">
                    <Container id="home">
                        <Row>
                            <Col>
                                <div className="home text-center">
                                    <div className="heading">
                                        <h2>Hello I'm</h2>
                                        <h1>Madan Gowda</h1>
                                        <h2>I'm a <span ref={el}></span></h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </div>

            <div>
                <Container className="aboutme" id="aboutme">
                    <Fade direction='up'>
                        <Row>
                            <Col className="mx-auto">
                                <h2>About Me</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} className="mx-auto">
                                <p>Versatile Full Stack Developer | Proficient in React.js, Node.js, TypeScript, Docker, and AWS | Skilled in crafting robust and scalable web applications | Passionate about delivering high-quality software solutions for optimal user experiences.</p>
                                <p>With 2+ years of hands-on experience, I've successfully contributed to various projects for startups. Committed to delivering innovative solutions for optimal user experiences. My expertise lies in full-stack development, where I blend creativity and technical prowess to deliver exceptional solutions.</p>
                            </Col>
                        </Row>

                    </Fade>
                </Container>
            </div>

            <div>
                <Container className="my-4 myskills">
                    <Row>
                        <Col className="text-center">
                            <h2>My Skills</h2>
                        </Col>
                    </Row>
                    <Row>
                        {skills.length > 0 ? (
                            <>
                                {skills.map((skill) => {
                                    return (
                                        <Col lg={3} key={skill.name}>
                                            <div className="skills">
                                                <img src={skill.logo} alt="" />
                                                {skill.name}
                                            </div>
                                        </Col>
                                    );
                                })}
                            </>
                        ) : null}
                    </Row>
                </Container>
            </div>

            <div>
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
                                    return (
                                        <Col lg={3} key={project.name}>
                                            <Card className="flip-card mb-4" style={{ height: "300px", backgroundColor: "transparent", border: "none", borderRadius: "25px" }}>
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front">
                                                        <Card.Img variant='top' src={project.logo} />
                                                        <Card.Body>
                                                            <Card.Title>{project.name}</Card.Title>
                                                            <Card.Text>
                                                                {
                                                                    project.tags.length > 0 ? <>
                                                                        {
                                                                            project.tags.map((tag) => {
                                                                                return <span className="badge rounded-pill text-bg-secondary m-1 p-2" key={tag}>{tag}</span>
                                                                            })
                                                                        }
                                                                    </> : <></>
                                                                }
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <Card.Body>
                                                            <Card.Text>
                                                                {project.description}
                                                            </Card.Text>
                                                            <a href={project.github} target='_blank'>
                                                                <AiFillGithub size={35} color='#000' />
                                                            </a>
                                                            <a href={project.live} target='_blank'>
                                                                <FiExternalLink size={35} color='#000' />
                                                            </a>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </Row>
                </Container>
            </div>

            <div>
                <Container className="contactme" id="contactme">
                    <Row>
                        <Col><h2>Contact Me</h2></Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="mx-auto">
                            <Form target="_blank" action="https://formsubmit.co/madangowda3242@gmail.com" method="POST">
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Your Name" required />
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Your Email" required />
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" cols="30" rows="5" placeholder="Your Message" required />
                                </Form.Group>
                                <Button type="submit" className="contact-btn mt-3" variant="none">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container className="footer">
                    <Row>
                        <Col lg className="mx-auto links">
                            <a href={'https://github.com/madan3242'} target={'_blank'}>
                                <img src={github2} alt="github" />
                            </a>
                            <a href="https://twitter.com/madang0wda" target={'_blank'}>
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="https://www.linkedin.com/in/madan-gowda/" target={'_blank'}>
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg>
                            <h3 className="text-center">Profile Links</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col><p>All Right Reserved {year} ® - Madan Gowda</p></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home