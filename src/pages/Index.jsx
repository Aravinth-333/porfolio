import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact"
import Education from "../components/Education";
import Footer from "../components/Footer";
import Internships from "../components/Intership";
import Projects from "../components/Projects";
import Skills from '../components/Skills'
import './index.css';
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education/>
      <Skills/>
      <Projects/>
      <Internships/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Index;
