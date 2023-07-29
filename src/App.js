import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />

      <Experience />

      
    </div>
  );
}

export default App;