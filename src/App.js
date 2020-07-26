import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume.js";
import Works from "./Components/Works";
import Testimonial from "./Components/Testimonials";
import resumeData from "./Components/ResumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header resumeData={resumeData} />
          <About resumeData={resumeData} />
          <Resume resumeData={resumeData} />
          <Works resumeData={resumeData} />
          <Testimonial resumeData={resumeData} />
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </header>
      </div>
    );
  }
}

export default App;

//FUNCTIONAL COMPONENT

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header />
//         <About />
//         <Resume />
//         <Works />
//         <Testimonial />
//         <ContactUs />
//         <Footer />
//       </header>
//     </div>
//   );
// }
