import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import AboutMe from './components/aboutme/aboutme';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import ContactMe from './components/contactme/contactme';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <div style={{ position: "relative"}}>
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App;