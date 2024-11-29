import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";  // Import Hero component
import About from "./components/About";
import KeyActivities from "./components/Activities";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VisionPage from "./components/Vision";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <VisionPage/>
      <KeyActivities />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
