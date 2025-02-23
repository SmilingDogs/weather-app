import PropTypes from "prop-types";
import styles from "./Container.module.css";

function Container({ children }) {
  return <main className={styles.mainContainer}>{children}</main>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
