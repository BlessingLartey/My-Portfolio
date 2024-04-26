// pages/Home.js
import React from "react";
import "../styles/Home.css";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero section with background image */}
      <div className="hero-section">
        <div className="home-content">
          <p className="home-description">I'm software developer</p>
          <h1 className="home-title">Hello, my name is Blessing Kai Lartey.</h1>
          <button className="cta-button">View Projects</button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
