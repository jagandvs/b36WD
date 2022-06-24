import React from "react";
import Features from "./Features";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";
import Service from "./Service";

const App = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Features />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
