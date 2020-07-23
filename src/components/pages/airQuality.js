import React, { useState } from "react";
import axios from "axios";
import AirHelper from "../helpers/airHelper";

export default function AirQuality() {
  const [error, setError] = useState(null);
  const [airQuality, setQuality] = useState([]);
  const [city, setCity] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    axios
      .get(
        `https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        res.data.city_name
          ? setQuality(res.data)
          : setError("Incorrect city or unsupported one");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      <div className="page-name">Air Quality</div>
      <form onSubmit={handleSubmit} className="weather-search-wrapper">
        <input
          onChange={handleSearch}
          type="text"
          name="city"
          placeholder="Type city name ex. Chisinau "
          className="search-input"
        />
        <button type="submit" value="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="city-text">{error ? error : airQuality.city_name}</div>
      <div className="about-container">
        {airQuality.city_name
          ? airQuality.data.map((item, index) => {
              return (
                <AirHelper
                  key={index}
                  index={index}
                  aqi={item.aqi}
                  o3={item.o3}
                  so2={item.so2}
                  no2={item.no2}
                  co={item.co}
                  pollen_tree={item.pollen_level_tree}
                  pollen_grass={item.pollen_level_grass}
                />
              );
            })
          : null}
      </div>
    </>
  );
}
