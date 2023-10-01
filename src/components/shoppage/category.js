import styles from "./category.module.css";

const Category = (props) => {
  // function filterProduct nhận các tham số category rồi truyền ra shoppage để hiển thị product tương ứng
  const filterProduct = (value) => () => {
    props.onToggeCategory(value);
  };

  return (
    <>
      <div className="col-xs-12 col-lg-3">
        <div className={styles.category}>
          <h3>Categories</h3>
          <ul>
            <li className="bg-black text-white text-uppercase fw-semibold">
              Apple
            </li>
            <li
              className={props.active === "all" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("all")}
            >
              All
            </li>
            <li className="bg-body-tertiary text-uppercase fw-semibold not">
              Iphone & Mac
            </li>
            <li
              className={props.active === "iphone" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("iphone")}
            >
              Iphone
            </li>
            <li
              className={props.active === "ipad" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("ipad")}
            >
              Ipad
            </li>
            <li
              className={props.active === "macbook" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("macbook")}
            >
              Macbook
            </li>
            <li className="bg-body-tertiary text-uppercase fw-semibold not">
              Wireless
            </li>
            <li
              className={props.active === "airport" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("airport")}
            >
              Airpod
            </li>
            <li
              className={props.active === "watch" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("watch")}
            >
              Watch
            </li>
            <li className="bg-body-tertiary text-uppercase fw-semibold not">
              Other
            </li>
            <li
              className={props.active === "mouse" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("mouse")}
            >
              Mouse
            </li>
            <li
              className={props.active === "keyboard" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("keyboard")}
            >
              Keyboard
            </li>
            <li
              className={props.active === "other" ? styles["active-li"] : ""}
              role="button"
              onClick={filterProduct("other")}
            >
              Other
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
