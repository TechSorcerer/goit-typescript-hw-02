import styles from "./ErrorMessage.module.css";
import PropTypes from "prop-types";
import oopsImage from "../../assets/oopsImage.png";

type Mes = {
  message: string;
};

const ErrorMessage: React.FC<Mes> = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <img src={oopsImage} alt="Oops" width="300" height="300" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
