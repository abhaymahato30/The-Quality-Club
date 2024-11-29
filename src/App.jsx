import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";  // Import Hero component
import About from "./components/About";
import KeyActivities from "./components/Activities";
import Team from "./components/Team";
import Footer from "./components/Footer";
import VisionPage from "./components/Vision";
import Pointer from "./components/Pointer";

const App = () => {
  return (
    <div className="App">
      <Pointer/>
      <Navbar />
      <Hero/>
      <About />
      <VisionPage/>
      <KeyActivities />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
