import './App.css';
// import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';

import Projects from './pages/Projects';
import Cerftifications from './pages/Cerftifications';



function App() {
  return (
    <>
    <Navigation/>  
    <Home/>
    <AboutMe/>
    <Projects/>
    <Cerftifications/>
    
    </>
);
}

export default App;
