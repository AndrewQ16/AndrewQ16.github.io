import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './Home/Home.js';
import Projects from './Projects/Projects.js';
import Resume from './Resume/Resume.js';
import AboutMe from './AboutMe/AboutMe.js';
import Experience from './Experience/Experience.js'

const image = "logo192.png";

// This is just a navigator, similar to how there is routing on Angular. Just a note for myself.
function App() {
  return (
    <div>
        
        <Router>
            <div>
            {/* bg-light implies light nav, dark text*/}
                <nav id="nav-bg" class="navbar navbar-expand-md sticky-top">
                            <Link to="/" class="nav-link">
                                <img class="img-space" src="images/home.png" width="20" height="20"/>HOME
                            </Link>
                            <Link to="/projects" class="nav-link">
                                <img class="img-space" src="images/project.png" width="20" height="20"/>PROJECTS
                                
                            </Link>
                            <Link to="/experience" class="nav-link">
                                <img src="images/work-station.png" width="20" height="20"/> EXPERIENCE
                                </Link>
                            <Link to="/resume" class="nav-link">
                                <img src="images/resume.png" width="20" height="20"/> RESUME</Link>
                            <Link to="/about_me" class="nav-link">
                                <img src="images/soccer-ball(2).png" width="20" height="20"/> ABOUT ME</Link>
                </nav>

                <Switch>
                    <Route path="/projects">
                        <Projects></Projects>
                    </Route>
                    <Route path="/resume">
                        <Resume></Resume>
                    </Route>
                    <Route path="/experience">
                        <Experience></Experience>
                    </Route>
                    <Route path="/about_me">
                        <AboutMe></AboutMe>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
