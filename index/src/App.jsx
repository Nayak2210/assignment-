import Navbar from './components/NavBar/index.jsx'
import './App.css'
import Hero from './components/Hero/index.jsx'
import Project from './components/Project/proj.jsx'
import Footer from './components/Footer/foot.jsx'
import Skills from './components/Skills/skill.jsx'
import Experience from './components/Experience/exp.jsx'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Skills/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App