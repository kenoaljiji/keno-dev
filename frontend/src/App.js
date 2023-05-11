import Home from './sections/home/Home';

import Skills from './sections/skills/Skills';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Projects from './sections/projects/Projects';
import Footer from './layout/Footer';
import Menu from './components/menu/Menu';

const App = () => {
  return (
    <div>
      <Menu />
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
