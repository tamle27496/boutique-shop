import styles from "./ProductItem.module.css";
import formatCurrency from "../../hooks/formatCurrency";

const ProductItem = (props) => {
  return (
    <div className={styles["item"]} onClick={props.onNavigateToId}>
      <img className="w-100 d-block" src={props.img1} alt={props.name} />
      <div className={styles["item-text"]}>
        <h6 className={`mt-4 ${styles["item-name"]}`}>{props.name}</h6>
        <p className={`text-body-tertiary ${styles["item-price"]} `}>
          {`${formatCurrency(props.price)}`}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
