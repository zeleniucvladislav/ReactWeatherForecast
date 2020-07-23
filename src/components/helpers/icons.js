import {
  faTemperatureHigh,
  faTemperatureLow,
  faThermometerHalf,
  faWind,
  faSearch,
  faTint,
  faCalendarDay,
  faCloud,
  faAtom,
  faTree,
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
    faCalendarDay,
    faCloud,
    faAtom,
    faTree
  );
};

export default Icons;
