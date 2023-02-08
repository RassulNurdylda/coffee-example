import React from "react";
import First from "../components/First";
import Footer from "../components/Footer";
import Fourth from "../components/Fifth";
import { Navbar } from "../components/Navbar";
import Second from "../components/Second";
import Third from "../components/Third";
import Fifth from "../components/Fifth";
import Sixth from "../components/Sixth";
import Seventh from "../components/Seventh";
import Eighth from "../components/Eighth";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Second />
      <Sixth />
      <Seventh />
      <Third />
      <Eighth />
      <Fifth />
      <Footer />
    </main>
  );
};

export default Home;
