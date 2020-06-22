import React from "react";
import Layout from "./Shared/Layout";
import { Route } from "react-router-dom";
import Food from "./Food.jsx";

const Main = () => {
  return (
    <>
      <Layout>
        {/* <h1>DreamState</h1> */}
        <Route exact path="/Food" render={() => <Food />} />
      </Layout>
    </>
  );
};

export default Main;
