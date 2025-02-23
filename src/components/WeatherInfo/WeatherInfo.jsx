// prettier-ignore
import {clouds, thunderstorm, drizzle, rain, snow, clear, atmosphere} from "../../assets/weather";
import PropTypes from "prop-types";
import { useCallback } from "react";
import ForecastItem from "../ForecastItem/ForecastItem";
import styles from "./WeatherInfo.module.css";
import otherStyles from "../ForecastItem/ForecastItem.module.css";

function WeatherInfo({ weatherData, forecastData, error }) {
  const weatherIconSelect = useCallback((status) => {
    switch (status) {
      case "Thunderstorm":
        return thunderstorm;
      case "Drizzle":
        return drizzle;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clear;
      case "Clouds":
        return clouds;
      default:
        return atmosphere;
    }
  }, []);

  if (!weatherData || !forecastData || error) {
    return null;
  }

  const { name, main, weather, wind, sys } = weatherData;
  const { temp, humidity } = main;

  const date = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const currentDate = date.toLocaleDateString("en-UA", options);

  const forecast = forecastData.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .map((item) => {
      const { dt_txt, weather, main } = item;
      return {
        date: formatDate(dt_txt.split(" ")[0]),
        icon: weatherIconSelect(weather[0].main),
        temp: Math.round(main.temp),
      };
    });

  function formatDate(dateString) {
    // prettier-ignore
    const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
  }

  const forecastItems = forecast.map((item, index) => {
    return <ForecastItem key={index} item={item} />;
  });

  return (
    <section className={styles.weatherInfo}>
      <div className={styles.locationDate}>
        <div className={styles.location}>
          <span className="material-symbols-outlined">location_on</span>
          {/* prettier-ignore */}
          <h4>{name}, {sys.country}</h4>
        </div>
        <h5 className={otherStyles.regularTxt}>{currentDate}</h5>
      </div>

      <div className={styles.weatherSummary}>
        <img
          src={weatherIconSelect(weather[0].main)}
          className={styles.weatherSummaryImg}
        />
        <div className={styles.weatherSummaryInfo}>
          <h1>{Math.round(temp)}°C</h1>
          <h3 className={otherStyles.regularTxt}>{weather[0].main}</h3>
        </div>
      </div>

      <div className={styles.weatherConditions}>
        <div className={styles.conditionItem}>
          <span className="material-symbols-outlined">water_drop</span>
          <div className={styles.conditionInfo}>
            <h5 className={otherStyles.regularTxt}>Humidity</h5>
            <h5>{humidity}%</h5>
          </div>
        </div>

        <div className={styles.conditionItem}>
          <span className="material-symbols-outlined">air</span>
          <div className={styles.conditionInfo}>
            <h5 className={otherStyles.regularTxt}>Wind Speed</h5>
            <h5>{wind.speed} M/s</h5>
          </div>
        </div>
      </div>

      <div className={styles.forecastItems}>{forecastItems}</div>
    </section>
  );
}
WeatherInfo.propTypes = {
  weatherData: PropTypes.object.isRequired,
  forecastData: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

export default WeatherInfo;
