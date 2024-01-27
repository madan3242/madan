import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

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

export default App