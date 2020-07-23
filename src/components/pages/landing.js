import React from "react";
import { Link } from "react-scroll";

export default function Landing() {
  return (
    <div
      className="landing-wrapper"
      style={{ backgroundImage: `url(${require("../../assets/bg0.jpg")})` }}
    >
      <div className="landing-page-data">
        <div className="landing-title">Weather Forecast React Application</div>
        <div className="landing-text">
          This page uses weatherbit.io public api to get weather data
        </div>
        <div className="nav-buttons">
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <button className="landing-btn">Weather Forecast</button>
          </Link>
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <button className="landing-btn">Air Quality</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
