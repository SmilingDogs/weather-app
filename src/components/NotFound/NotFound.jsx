import PropTypes from "prop-types";
import notFound from "../../assets/message/not-found.png";
import styles from "../ForecastItem/ForecastItem.module.css";
import otherStyles from "../SearchCity/SearchCity.module.css";

function NotFound({ error }) {
  return (
    <section
      className={otherStyles.sectionMessage}
      style={{ display: error ? "block" : "none" }}
    >
      <img src={notFound} />
      <div>
        <h1>Not Found</h1>
        <h4 className={styles.regularTxt}>
          The city you are looking for cannot be found.
        </h4>
      </div>
    </section>
  );
}

NotFound.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default NotFound;
