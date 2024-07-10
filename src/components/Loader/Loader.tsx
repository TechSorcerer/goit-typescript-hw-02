import styles from "./Loader.module.css";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <MagnifyingGlass
        visible={true}
        height="120"
        width="120"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#111"
      />
    </div>
  );
};

export default Loader;
