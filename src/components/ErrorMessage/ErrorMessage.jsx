import styles from "./ErrorMessage.module.css";
import PropTypes from "prop-types";
import oopsImage from "../../assets/oopsImage.png";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <img src={oopsImage} alt="Oops" width="300" height="300" />
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
