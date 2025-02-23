import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ getWeatherData }) {
  const [city, setCity] = useState("");

  const handleChange = useCallback(({ target }) => {
    setCity(target.value);
  }, []);

  const handleClick = useCallback(() => {
    setCity("");
    getWeatherData("weather", city);
    getWeatherData("forecast", city);
  }, [city, getWeatherData]);

  return (
    <header className={styles.inputContainer}>
      <input
        className={styles.cityInput}
        placeholder="Search City"
        type="text"
        name="city"
        onChange={handleChange}
        value={city}
      />
      <button className={styles.searchBtn} onClick={handleClick}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </header>
  );
}

Header.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
};

export default Header;
