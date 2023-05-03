import './App.css';
import Home from './sections/home/Home';
import { Example } from './components/Example';
import Skills from './sections/skills/Skills';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Projects from './sections/projects/Projects';
import Footer from './layout/Footer';
import Humburger from './layout/Humburger';

const App = () => {
  return (
    <div className='App'>
      {/*   <Example /> */}
      <Humburger />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
