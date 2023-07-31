import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import About from './components/About';
import Techs from './components/Techs';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />

      <Techs />
      <Contact />
      <Footer />
      <SocialLinks />
      
    </div>
  );
}

export default App;