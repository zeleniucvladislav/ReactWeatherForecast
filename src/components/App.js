import React, { useEffect } from "react";
import ForecastW from "./pages/forecastW";
import Icons from "./helpers/icons";
import Landing from "./pages/landing";
import About from "./pages/about";

function App() {
  useEffect(() => {
    Icons();
  }, []);
  return (
    <div className="App">
      <div id="section1">
        <Landing />
      </div>
      <div id="section2">
        <ForecastW />
      </div>
      <About />
    </div>
  );
}

export default App;
