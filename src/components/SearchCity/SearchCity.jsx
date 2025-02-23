import searchCity from "../../assets/message/search-city.png";
import PropTypes from "prop-types";
import styles from "./SearchCity.module.css";
import otherStyles from "../ForecastItem/ForecastItem.module.css";

function SearchCity({ isShowSearch }) {
  if (!isShowSearch) return null;

  return (
    <section className={styles.sectionMessage}>
      <img src={searchCity} />
      <div>
        <h1>Search City</h1>
        <h4 className={otherStyles.regularTxt}>
          Find out the weather conditions of the city.
        </h4>
      </div>
    </section>
  );
}
SearchCity.propTypes = {
  isShowSearch: PropTypes.bool.isRequired,
};
export default SearchCity;
