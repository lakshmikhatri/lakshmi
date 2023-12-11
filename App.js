import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/intro';
import Skills from './components/Skills/Skills';
import Works from "./components/Works/works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
