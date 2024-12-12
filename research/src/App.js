import React from "react";
import Navbar from "./components/Navbar";  // Import Navbar component
import AboutUs from "./components/AboutUs";  // Import About Us section
import WhyWe from "./components/WhyWe";  // Import Why We section
import NewsUpdates from "./components/NewsUpdates";  // Import News and Updates section
import ProjectStats from "./components/ProjectStats";  // Import Project Stats section
import ResearchProcess from "./components/ResearchProcess";  // Import Research Process section
import Footer from "./components/Footer";
import Header from "./components/Header";
import Planning from "./components/Planning";
import Initiation from "./components/initiation";
import Execution from "./components/Execution";
import Monitoring from "./components/Monitoring";
import Closing  from "./components/Closing";
import {Routes, Route, useNavigate} from "react-router-dom";
import NavigationPanel from "./components/NavigationPanel";
const App = () => {
  return (
    <div>
       <Header />
      <div style={{ display: 'flex' }}>
      { <NavigationPanel /> /*Add the Navigation Panel */}
      <div style={{ marginLeft: '220px', padding: '20px', flexGrow: 1 }}> {/* Adjust margin for content */}
        <Initiation id="initiation" />
        <Planning id="planning" />
        <Execution id="execution" />
        <Monitoring id="monitoring" />
        <Closing id="closing" />
        <Footer />
      </div>
    </div>
    </div>
  );
};


export default App;
