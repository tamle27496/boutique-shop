import { useEffect, useState } from "react";
import styles from "./quantityInput.module.css";

// Componet Quantity thay thế cho input type number truyền thống
const QuantityInput = (props) => {
  // tạo state quantity hiển thị quantity được truyền vào từ props hoặc mặc định là 1 nếu k có props.quantity truyền vào
  const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 1);

  // function valueQuantity set state khi value của input thay đổi
  const valueQuantity = (event) => {
    setQuantity(event.target.value);
  };

  // quantity - 1 khi quantity > 1, nếu không thì minusQuantity không hoạt động
  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevState) => --prevState);
    }
  };

  // quantity + 1
  const plusQuantity = () => {
    setQuantity((prevState) => ++prevState);
  };

  useEffect(() => {
    if (props.valueQuantity) {
      props.valueQuantity(quantity);
    }
  }, [quantity]);

  return (
    <div className={styles.control}>
      <button
        className={` ${styles["btn-left"]}`}
        onClick={minusQuantity}
        disabled={quantity === 1}
      >
        <i className="fa fa-caret-left" aria-hidden="true"></i>
      </button>
      <input
        type="text"
        className={styles.input}
        onChange={valueQuantity}
        value={quantity}
      />
      <button className={` ${styles["btn-right"]}`} onClick={plusQuantity}>
        <i className="fa fa-caret-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default QuantityInput;
