import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "../helpers/images";

export default function ForecastW() {
  const [error, setError] = useState(null);
  const [weatherForecast, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        res.data.city_name
          ? setWeather(res.data)
          : setError("Incorrect city or unsupported one");
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
      <div className="page-name">16 Day Weather Forecast</div>
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
      <div className="city-text">
        {error ? error : weatherForecast.city_name}
      </div>
      <div className="container">
        {weatherForecast.city_name
          ? weatherForecast.data.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <div className="content"></div>
                  <div className="content-index">Day {index + 1}</div>
                  <div className="content-left-col">
                    <Images icon={item.weather.icon} />
                    <div className="content-description">
                      {item.weather.description}
                    </div>
                    <div className="content-data">
                      <FontAwesomeIcon
                        icon="calendar-day"
                        className="weather-icons calendar-icon"
                      />
                      {item.valid_date}
                    </div>
                  </div>
                  <div className="content-right-col">
                    <div className="content-data">
                      <FontAwesomeIcon
                        icon="wind"
                        className="weather-icons wind-icon"
                      />
                      Average wind : {item.wind_spd.toFixed(1)} m/s
                    </div>
                    <div className="content-data">
                      <FontAwesomeIcon
                        icon="thermometer-half"
                        className="weather-icons temperature-avg"
                      />
                      Average temperature : {item.temp} &deg;C
                    </div>
                    <div className="content-data">
                      <FontAwesomeIcon
                        icon="temperature-low"
                        className="weather-icons temperature-low"
                      />
                      Minimum temperature : {item.min_temp} &deg;C
                    </div>
                    <div className="content-data">
                      <FontAwesomeIcon
                        icon="temperature-high"
                        className="weather-icons temperature-high"
                      />
                      Maximum temperature : {item.max_temp} &deg;C
                    </div>
                    <div className="content-data">
                      <FontAwesomeIcon
                        icon="tint"
                        className="weather-icons tint-icon"
                      />
                      Precipitation chance : {item.pop} %
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
