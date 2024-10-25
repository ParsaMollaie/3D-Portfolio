import About from './sections/About';
import Clients from './sections/Clients';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import WorkExperience from './sections/WorkExperience';
import Footer from './sections/Footer';
import Contact from './sections/Contact';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
