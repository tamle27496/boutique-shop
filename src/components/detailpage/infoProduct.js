import { useState } from "react";
import formatCurrency from "../../hooks/formatCurrency";
import QuantityInput from "../UI/quantityInput";
import styles from "../UI/quantityInput.module.css";
import { useDispatch, useSelector } from "react-redux";

const InfoProduct = (props) => {
  // Khởi tạo biến product nhận thông tin của sản phẩm truyền từ detailpage vào
  const product = props.product;

  // Khởi tạo state quantity nhận giá trị từ QuantityInput truyền ra, setState mặc định là 1
  const [quantity, setQuantity] = useState(1);

  // Khởi tạo function valueQuantity nhận giá trị từ QuantityInput truyền ra, tiến hành setState vào state quantity
  const valueQuantity = (value) => {
    setQuantity(value);
  };

  // Khởi tạo biến dispatch để sử dụng useDispatch của redux
  const dispatch = useDispatch();

  // Khởi tạo biến listCart nhận state listCart từ redux store
  const listCart = useSelector((state) => state.cart.listCart);

  // Function addToCart nhận tham số truyền vào là 1 object product
  const addToCart = (product) => () => {
    // Khởi tạo filterProduct để tìm kiếm theo id trong listCart xem có tồn tại product truyền vào làm tham số hay không
    const filterProduct = listCart.find(
      (prd) => prd._id.$oid === product._id.$oid
    );

    // Ở đây có 2 trường hợp xảy ra:
    // Nếu listCart chưa có product nào hoặc listCart có product rồi nhưng biến filterProduct chưa tồn tại (product đc truyền vào làm tham số chưa tồn tại trong listCart)
    if (listCart.length === 0 || (listCart.length > 0 && !filterProduct)) {
      // Thực hiện gán key "quantity" lấy giá trị từ state quantity vào tham số "product" (biến addQuantity)
      const addQuantity = { ...product, quantity: quantity };

      // Push product vừa thực hiện gán quantity vào listCart
      listCart.push(addQuantity);

      // Cập nhật localStrorage
      localStorage.setItem("listCart", JSON.stringify(listCart));

      // Dispatch ADD_CART lên redux store để cập nhật state
      dispatch({ type: "ADD_CART" });
    }
    // TH2: Nếu listCart có product rồi và biến filterProduct có product tương ứng được tìm thấy trong listCart
    if (listCart.length > 0 && filterProduct) {
      // Thực hiện tìm kiếm vị trí (index) của product đó trong listCart
      const index = listCart.indexOf(filterProduct);

      // Khởi tạo oldQuantity nhận quantity cũ của product
      const oldQuantity = filterProduct.quantity;

      // Thực hiện gán key "quantity" mới lấy giá trị từ oldQuantiy + state quantity update quantity mới vào tham số "product" (biến addQuantity)
      const addQuantity = { ...product, quantity: oldQuantity + quantity };

      // Cập nhật product tương ứng trong listCart
      listCart[index] = addQuantity;

      // Cập nhật lại listCart ở localStorage
      localStorage.setItem("listCart", JSON.stringify(listCart));

      // Dispatch ADD_CART lên redux store để cập nhật state
      dispatch({ type: "ADD_CART" });
    }
  };
  return (
    <div className="row">
      <h2 className="mb-4">{product.name}</h2>
      <h4 className="mb-4 fw-normal text-body-tertiary">
        {/* Gọi hàm formatCurrency truyền vào product.price để format lại price
        theo yêu cầu */}
        {formatCurrency(product.price)}
      </h4>
      <p className="mb-4 text-body-tertiary">{product.short_desc}</p>
      <h5 className="mb-3">
        Category:{" "}
        <span className="fw-normal fs-6 text-body-tertiary">
          {product.category}
        </span>
      </h5>
      <div className="d-flex justify-center">
        <div
          className={`d-flex align-items-center border-dark-subtle ${styles["quantity-product"]}`}
        >
          <p className="my-0 me-5  text-body-tertiary">Quantity</p>
          {/* Truyền quantity từ QuantityInput ra */}
          <QuantityInput valueQuantity={valueQuantity} />
        </div>
        {/* Gọi addToCart và truyền product làm tham số */}
        <button className="btn btn-page" onClick={addToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default InfoProduct;
