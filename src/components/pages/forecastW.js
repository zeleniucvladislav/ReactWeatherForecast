import React, { useState } from "react";
import axios from "axios";
import WeatherHelper from "../helpers/weatherHelper";
import moment from "moment";

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
        setError("An error happened while requesting data");
        console.log(error);
      });
  };
  const handleSearch = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="forecast-container">
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
        {weatherForecast.city_name &&
          weatherForecast.data.map((item, index) => {
            return (
              <WeatherHelper
                key={index}
                index={index}
                weather_icon={item.weather.icon}
                weather_description={item.weather.description}
                date={moment(item.valid_date).format("Do MMMM YYYY")}
                wind_spd={item.wind_spd}
                temp={item.temp}
                min_temp={item.min_temp}
                max_temp={item.max_temp}
                pop={item.pop}
              />
            );
          })}
      </div>
    </div>
  );
}
