import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./contents/contact";
import OpeningHours from "./contents/opening-hours";
import WastePrices from "./contents/waste-acceptance";
import Title from "./contents/title";
import Footer from "./contents/footer";

function App() {
  return (
    <div className="App">
      <OpeningHours />
      <Title />
      <Contact />
      <WastePrices />
      <Footer />
    </div>
  );
}

export default App;
