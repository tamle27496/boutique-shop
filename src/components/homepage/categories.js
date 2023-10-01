import styles from "../module css pages/HomePage.module.css";
import classes from "../UI/ProductItem.module.css";
import { Link } from "react-router-dom";

// Tạo 1 dummy data để render dữ liệu cho gọn
const bannerCollection = [
  { url: "/images/product_1.png", alt: "product_1" },
  { url: "/images/product_2.png", alt: "product_2" },
  { url: "/images/product_3.png", alt: "product_3" },
  { url: "/images/product_4.png", alt: "product_4" },
  { url: "/images/product_5.png", alt: "product_5" },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div
          className={`section-title text-center ${styles["section-title"]} `}
        >
          <h6 className="text-body-tertiary">Carefully created collections</h6>
          <h3>Browse our Categories</h3>
        </div>
        <div className="row g-4">
          {/* Map ra các dữ liệu tương ứng từ dummydata đã khởi tạo */}
          {bannerCollection.map((banner) => (
            <div
              key={banner.alt}
              // Ở đây kiểm tra nếu banner có vị trí < 2 thì return ra các div col 6 theo đúng yêu cầu đề bài, nếu lớn hơn 2 thì div col 4
              className={
                bannerCollection.indexOf(banner) < 2
                  ? "col-sm-12 col-md-6 col-lg-6"
                  : "col-sm- 12 col-md-6 col-lg-4"
              }
            >
              <Link to="shop" className={classes["item"]}>
                <img
                  className="w-100 d-block"
                  src={banner.url}
                  alt={banner.alt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
