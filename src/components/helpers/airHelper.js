import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

export default function AirHelper(props) {
  const date = moment().format("YYYY-MM-DD ");
  return (
    <div className="about-box">
      <div className="content"></div>
      <div className="content-left-col">
        <FontAwesomeIcon icon="cloud" className="air-quality-icon" />
        <div className="content-description">Air quality index {props.aqi}</div>
        <div className="content-data">
          <FontAwesomeIcon
            icon="calendar-day"
            className="weather-icons calendar-icon"
          />
          {date}
        </div>
      </div>
      <div className="content-right-col">
        <div className="content-data">
          <FontAwesomeIcon icon="atom" className="weather-icons atom-icon" />
          Surface O3 : {props.o3.toFixed(1)} µg/m³
        </div>
        <div className="content-data">
          <FontAwesomeIcon icon="atom" className="weather-icons atom-icon" />
          Surface SO2 : {props.so2.toFixed(1)} µg/m³
        </div>
        <div className="content-data">
          <FontAwesomeIcon icon="atom" className="weather-icons atom-icon" />
          Surface NO2 : {props.no2.toFixed(1)} µg/m³
        </div>
        <div className="content-data">
          <FontAwesomeIcon icon="atom" className="weather-icons atom-icon" />
          Surface CO : {props.co.toFixed(1)} µg/m³
        </div>
        <div className="content-data">
          <FontAwesomeIcon icon="tree" className="weather-icons tree-icon" />
          Tree Pollen level (0-4) : {props.pollen_tree}
        </div>
        <div className="content-data">
          <FontAwesomeIcon icon="tree" className="weather-icons tree-icon" />
          Grass Pollen level (0-4) : {props.pollen_grass}
        </div>
      </div>
    </div>
  );
}
