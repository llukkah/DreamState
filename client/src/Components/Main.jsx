import React from "react";
import Layout from "./Shared/Layout";
import { Route } from "react-router-dom";
import Food from "./Food.jsx";
import Beauty from "./Beauty.jsx"

const Main = () => {
  return (
    <>
      <Layout>
        {/* <h1>DreamState</h1> */}
        <Route exact path="/Food" render={() => <Food />} />
        <Route exact path="/Beauty" render={() => <Beauty />} />
      </Layout>
    </>
  );
};

export default Main;
