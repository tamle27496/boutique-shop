import styles from "../module css pages/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  // Tạo biến navigate để sử dụng useNAvigate()
  const navigate = useNavigate();

  return (
    <section className="banner">
      <div className="container">
        <div className={`rows ${styles["bg-img"]}`}>
          <div className="col-sm-12 col-lg-4">
            <h5 className={`text-body-tertiary ${styles.collection}`}>
              New Inspiration 2020
            </h5>
            <h3 className={styles.promotion}>20% off on new season</h3>
            <button className={`btn btn-page`} onClick={() => navigate("shop")}>
              Browser collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
