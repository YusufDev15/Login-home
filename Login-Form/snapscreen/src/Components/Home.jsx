import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


function Home() {
  return (
    <div className="home-button-container">
    <h1>Welcome to</h1>
      <Link to="/login" className="home-button">
        SnapScreen
      </Link>
    </div>
  );
}

export default Home;
