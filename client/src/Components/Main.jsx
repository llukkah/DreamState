import React from "react";
import Layout from "./Shared/Layout";
import { Route } from "react-router-dom";
import Food from "./Food.jsx";
import Beauty from "./Beauty.jsx"
import Books from "./Books.jsx"
import Fashion from "./Fashion.jsx"
import Media from "./Media.jsx"
import Podcasts from "./Podcasts.jsx"
import Tech from "./Tech.jsx"
import Interpret from "./Interpret.jsx"

const Main = () => {
  return (
    <>
      <Layout>
        {/* <h1>DreamState</h1> */}
        <Route exact path="/Food" render={() => <Food />} />
        <Route exact path="/Beauty" render={() => <Beauty />} />
        <Route exact path="/Books" render={() => <Books />} />
        <Route exact path="/Fashion" render={() => <Fashion />} />
        <Route exact path="/Media" render={() => <Media />} />
        <Route exact path="/Podcast" render={() => <Podcasts />} />
        <Route exact path="/Tech" render={() => <Tech />} />
        <Route exact path="/Interpret" render={() => <Interpret />} />
      </Layout>
    </>
  );
};

export default Main;
