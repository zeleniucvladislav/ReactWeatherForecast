import React from "react";
import { Link } from "react-scroll";
import Bg0 from "../../assets/bg0.jpg";
import Bg1 from "../../assets/bg1.jpg";
import Bg2 from "../../assets/bg2.jpg";
import Bg3 from "../../assets/bg3.jpg";

export default function Landing() {
  const backgroundArray = [Bg0, Bg1, Bg2, Bg3];
  const randomIndex = Math.floor(Math.random() * backgroundArray.length);
  const selectedImage = backgroundArray[randomIndex];
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedImage})`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={bgStyle}>
      <div className="landing-page-data">
        <div className="landing-title">Weather Forecast React Application</div>
        <div className="landing-text">
          This page uses weatherbit.io public api to get weather data
        </div>
        <Link to="section2" spy={true} smooth={true} offset={0} duration={1000}>
          <button className="landing-btn">Weather Forecast</button>
        </Link>
      </div>
    </div>
  );
}
