import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import { SocialIcon } from 'react-social-icons';
import Fullpage from './components/fullpage'
import TIA from './sections/TIA';
import AboutSection from './sections/AboutSection'
import Skill from './sections/skillSection'
import Menu from './components/menu'
function App() {
  return (
    <div className="App">
        <div className="navigation"  />
        <TIA/>
        <AboutSection/>
        <Skill />
    </div>
  );
}

export default App;
