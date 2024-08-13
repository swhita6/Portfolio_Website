import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return ( 
    <>
    <Navbar />
    <Header />
    <About />
    <Cards />
    <Contact />
    </>
    )
};

export default App;
