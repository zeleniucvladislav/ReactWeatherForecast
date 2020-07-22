import React from "react";

export default function Images(props) {
  const logo = require(`../../assets/${props.icon}.png`);
  return <img src={logo} alt="weather icon" />;
}
