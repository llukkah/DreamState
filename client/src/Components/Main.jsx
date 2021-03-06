import React from "react";
import { Route } from "react-router-dom";
import Food from "./Food.jsx";
import Beauty from "./Beauty.jsx"
import Books from "./Books.jsx"
import Fashion from "./Fashion.jsx"
import Media from "./Media.jsx"
import Podcasts from "./Podcasts.jsx"
import Tech from "./Tech.jsx"
import Interpret from "./Interpret.jsx"
import About from "./About.jsx"
import Dreams from "./Dreams.jsx"
import WakeUp from "./WakeUp.jsx"
import Contact from "./Contact.jsx"
import DozeOff from "./DozeOff.jsx"
import Home from "./Home.jsx"
import Splash from "./Splash.jsx"



const Main = () => {
  return (
    <>
        <Route exact path="/" render={() => <Splash />} />
        <Route exact path="/Home" render={() => <Home />} />
        <Route exact path="/About" render={() => <About />} />
        <Route exact path="/Dreams" render={() => <Dreams />} />
        <Route exact path="/DozeOff" render={() => <DozeOff />} />
        <Route exact path="/WakeUp" render={() => <WakeUp/>} />
        <Route exact path="/Contact" render={() => <Contact />} />
        <Route exact path="/Food" render={() => <Food />} />
        <Route exact path="/Beauty" render={() => <Beauty />} />
        <Route exact path="/Books" render={() => <Books />} />
        <Route exact path="/Fashion" render={() => <Fashion />} />
        <Route exact path="/Media" render={() => <Media />} />
        <Route exact path="/Podcast" render={() => <Podcasts />} />
        <Route exact path="/Tech" render={() => <Tech />} />
        <Route exact path="/Interpret" render={() => <Interpret />} />
    </>
  );
};

export default Main;
