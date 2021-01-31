import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "./images";

export default function WeatherHelper(props) {
  return (
    <div className="box">
      <div className="content-index">Day {props.index + 1}</div>
      <div className="content-left-col">
        <Images icon={props.weather_icon} />
        <div className="content-description">{props.weather_description}</div>
        <div className="content-data">
          <FontAwesomeIcon
            icon="calendar-day"
            className="weather-icons calendar-icon"
          />
          {props.date}
        </div>
      </div>
      <div className="content-right-col">
        <div className="content-data">
          <FontAwesomeIcon icon="wind" className="weather-icons wind-icon" />
          Average wind : {props.wind_spd.toFixed(1)} m/s
        </div>
        <div className="content-data">
          <FontAwesomeIcon
            icon="thermometer-half"
            className="weather-icons temperature-avg"
          />
          Average temperature : {props.temp} &deg;C
        </div>
        <div className="content-data">
          <FontAwesomeIcon
            icon="temperature-low"
            className="weather-icons temperature-low"
          />
          Minimum temperature : {props.min_temp} &deg;C
        </div>
        <div className="content-data">
          <FontAwesomeIcon
            icon="temperature-high"
            className="weather-icons temperature-high"
          />
          Maximum temperature : {props.max_temp} &deg;C
        </div>
        <div className="content-data">
          <FontAwesomeIcon icon="tint" className="weather-icons tint-icon" />
          Precipitation chance : {props.pop} %
        </div>
      </div>
    </div>
  );
}
