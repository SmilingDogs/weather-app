import { useState } from "react";
import config from "../../config"; //* this is the config file with the API key

function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForcastData] = useState(null);
  const [isShowSearch, setIsShowSearch] = useState(true);
  const [error, setError] = useState(null);

  async function getWeatherData(endPoint, city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${config.apiKey}&units=metric`;
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod == 200) {
      endPoint === "weather" ? setWeatherData(data) : setForcastData(data);
      setError(null);
    } else {
      setError(data.message);
    }
    setIsShowSearch(false);
  }

  return [weatherData, forecastData, isShowSearch, error, getWeatherData];
}

export default useWeatherData;
