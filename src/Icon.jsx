import L from "leaflet";
import iconLocation from "./images/icon-location.svg";

const customIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [32, 40],       // Size of the icon
  iconAnchor: [16, 40],     // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -40]     // Point from which the popup should open relative to the iconAnchor
});

export default customIcon;
