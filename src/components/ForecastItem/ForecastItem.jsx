import PropTypes from "prop-types";
import styles from "./ForecastItem.module.css";

function ForecastItem({ item }) {
  return (
    <div className={styles.forecastItem}>
      <h5 className={styles.regularTxt}>{item.date}</h5>
      <img src={item.icon} className={styles.forecastItemImg} />
      <h5>{item.temp} °C</h5>
    </div>
  );
}
ForecastItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastItem;
