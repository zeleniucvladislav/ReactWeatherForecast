import {
  faTemperatureHigh,
  faTemperatureLow,
  faThermometerHalf,
  faWind,
  faSearch,
  faTint,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTemperatureHigh,
    faTemperatureLow,
    faThermometerHalf,
    faWind,
    faSearch,
    faTint,
    faCalendarDay
  );
};

export default Icons;
