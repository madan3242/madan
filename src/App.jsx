import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
// import AboutMe from './components/aboutme/AboutMe';
// import Skills from './components/skills/Skills';
// import Projects from './components/projects/Projects';
// import ContactMe from './components/contactme/ContactMe';
// import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <div style={{ position: "relative"}}>
        <Navbar />
        <Home />
        {/* <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer /> */}
      </div>
    </>
  )
}

export default App;