import { getWeather } from "./weather.js";
import { icons } from "./iconMapping.js";
//success -> if user allows position. Error, if not
navigator.geolocation.getCurrentPosition(success, error);

//we need only the coords of the objects -> destructuring
//latitdude/longitude = Längen- und Breitengrade, timezone = Ort
function success({ coords }) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  getWeather(coords.latitude, coords.longitude, timezone)
    .then((data) => renderWeather(data))
    .catch((e) => console.log(e));
}

function error() {
  alert(`Please allow us to use the location and refresh the page. Thanks`);
}
//Helper for Rendering
function renderWeather(data) {
  renderCurrentWeather(data);
  renderDailyWeather(data);
}
// change textContent of all
function setValue(selector, value, parent = document) {
  parent.querySelector(selector).textContent = value;
}

//to get the correct Icon, based on the IconCode of the API
function getIcon(iconCode) {
  return `./assets/icons/${icons[iconCode]}.svg`;
}

//what should be rendered? 
function renderCurrentWeather({ current }) {
  /*   document.querySelector(`[data-current-temp]`).textContent =
    current.currentTemp; --> Manually version*/
  setValue(`[data-current-temp]`, current.currentTemp);
  setValue(`[data-current-max]`, current.maxTemp);
  setValue(`[data-current-min]`, current.minTemp);
  setValue(`[data-current-precipitation]`, current.precipitation);
  setValue(`[data-current-fl]`, current.feelsLikeTemp);
  setValue(`[data-current-wind]`, current.windSpeed);

  document.querySelector(`.weather-icon.large`).src = getIcon(current.iconCode);
}
//for Dayformatting in renderDailyWeather
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: `long` });
const dailySection = document.querySelector(`.daily-section`);

const dayTemplate = document.getElementById("day-card-template");


//function for daily rendering
function renderDailyWeather({ daily }) {
  dailySection.innerHTML = ``;

  daily.forEach((day) => {
    const element = dayTemplate.content.cloneNode(true);

    element.querySelector(".weather-icon").src = getIcon(day.iconCode);
    setValue(`.day`, DAY_FORMATTER.format(day.timestamp), element);
    setValue(`[data-day-temp]`, day.maxTemp, element);
    dailySection.appendChild(element);
  });
}
