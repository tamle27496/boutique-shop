import formatCurrency from "../../hooks/formatCurrency";

const CheckoutTotal = (props) => {
  // Tạo biến listCart nhận dữ liêu từ props.listCart
  const listCart = props.listCart;

  // Tạo biến total tính tổng giá trị đơn hàng bằng cách (price * quantity) rồi cộng các phần tử ở listCart với nhau
  const total = listCart.reduce((total, currenValue) => {
    return total + currenValue.price * currenValue.quantity;
  }, 0);

  return (
    <div className="p-4 p-sm-4 pt-sm-5 p-md-4 p-lg-5 bg-light">
      <h3 className="fw-semibold text-uppercase pb-4">Cart Total</h3>

      {listCart.map((cart) => (
        <div
          key={cart._id.$oid}
          className="d-flex justify-content-between border-bottom mb-3"
        >
          <h6 className="fw-semibold text-uppercase me-2">{cart.name}</h6>
          <p className="text-secondary">
            {formatCurrency(cart.price)} x {cart.quantity}
          </p>
        </div>
      ))}

      <div className="d-flex justify-content-between mb-3">
        <h5 className="fw-semibold text-uppercase me-2">Total</h5>
        <h5 className="fw-normal">{formatCurrency(total)}</h5>
      </div>
    </div>
  );
};

export default CheckoutTotal;
