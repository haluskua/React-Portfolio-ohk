import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
// import Resume from "./Components/Resume.js";
import Resume from "./Components/Resume.js";
import Works from "./Components/Works";
import Testimonial from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Resume />
        <Works />
        <Testimonial />
        <ContactUs />
        <Footer />
      </header>
    </div>
  );
}

export default App;
