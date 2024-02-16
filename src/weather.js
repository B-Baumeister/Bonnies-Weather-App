export async function getWeather(lat, lon, timezone) {
  // with this I fetch the local data again and add it to the bottom of the string that is fetched
  const params = new URLSearchParams();
  params.append(`latitude`, lat);
  params.append(`longitude`, lon);
  params.append(`timezone`, timezone);

  //Then the API is fetched (of course with await/async) and finally the local user parameters are added to the string
  const results = await fetch(
    `https://api.open-meteo.com/v1/forecast?current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timeformat=unixtime&` +
      params.toString()
  );

  const data = await results.json();
  //Here the data is converted into a json format to make it easier to read later. The data can now be processed.
  return {
    current: parseCurrentData(data),
    daily: parseDailyData(data)
  };
}

// First, we retrieved the API URL and selected the required elements for our application. We then activated the Unix timestamp in the settings to simplify handling. This URL was now inserted as a string. Between "forecast" and "current tem." there is still our local information (latitude and longitude). However, as we want to adapt these to the user's location, we need to remove them at this point and add an "&" at the end of the string, as we will add them later.

function parseCurrentData({ current, daily }) {
  return {
    currentTemp: current.temperature_2m,
    feelsLikeTemp: current.apparent_temperature,
    windSpeed: current.wind_speed_10m,
    iconCode: current.weather_code,
    precipitation: current.precipitation,
    maxTemp: daily.temperature_2m_max[0],
    minTemp: daily.temperature_2m_min[0]
  };
}
function parseDailyData({ daily }) {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weather_code[index],
      maxTemp: daily.temperature_2m_max[index]
    };
  });
}
