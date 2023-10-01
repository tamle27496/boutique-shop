import QuantityInput from "../../UI/quantityInput";
import formatCurrency from "../../../hooks/formatCurrency";
import { useDispatch } from "react-redux";

const TableItem = (props) => {
  // Tạo biến product nhận dữ liệu từ props.product
  const product = props.product;

  // Tạo biến listCart nhận dữ liệu từ props.listCart
  const listCart = props.listCart;

  // Tạo biến dispatch sử dụng useDispatch
  const dispatch = useDispatch();

  // function valueQuantity nhận value từ QuantityInput truyền ra
  const valueQuantity = (value) => {
    // Tạo biến index tìm vị trí xuất hiện product đầu tiên ở listCart
    const index = listCart.indexOf(product);

    // Tạo biến changeQuantity thay đổi quantity bằng value từ QuantityInput truyền ra
    const changeQuantity = { ...product, quantity: value };

    // Cập nhật product tương ứng trong listCart
    listCart[index] = changeQuantity;

    // Cập nhật lại listCart ở localStorage
    localStorage.setItem("listCart", JSON.stringify(listCart));

    // Dispatch UPDATE_CART lên redux store để cập nhật state
    dispatch({ type: "UPDATE_CART" });
  };

  const deleteProduct = (product) => () => {
    console.log(product);
    const index = listCart.indexOf(product);

    // Xóa phần tử trong listCart
    listCart.splice(index, 1);

    // Cập nhật lại listCart ở localStorage
    localStorage.setItem("listCart", JSON.stringify(listCart));

    // Dispatch ADD_CART lên redux store để cập nhật state
    dispatch({ type: "DELETE_CART" });
  };

  return (
    <tr key={product._id.$oid}>
      <th className="align-middle" style={{ maxWidth: "100px" }}>
        <img className="w-100" src={product.img1} alt={product.name} />
      </th>
      <td className="fw-bold align-middle">
        <h5>{product.name}</h5>
      </td>
      <td className="align-middle text-secondary">
        {" "}
        {/* Gọi formatCurrency để format lại price */}
        {formatCurrency(product.price)}
      </td>
      <td className="align-middle">
        <QuantityInput
          valueQuantity={valueQuantity}
          quantity={product.quantity}
        />
      </td>
      <td className="align-middle text-secondary">
        {/* Gọi formatCurrency để format lại price */}
        {formatCurrency(product.price * product.quantity)}
      </td>
      <td className="align-middle text-secondary" role="button">
        <i
          className="fa-regular fa-trash-can"
          aria-hidden="true"
          onClick={deleteProduct(product)}
        ></i>
      </td>
    </tr>
  );
};

export default TableItem;
