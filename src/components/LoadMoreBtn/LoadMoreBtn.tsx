import styles from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={styles.btnCont}>
      <button className={styles.loadBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
