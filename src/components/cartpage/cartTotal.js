import formatCurrency from "../../hooks/formatCurrency";

const CartTotal = (props) => {
  // Tạo biến listCart nhận dữ liêu từ props.listCart
  const listCart = props.listCart;

  // Tạo biến total tính tổng giá trị đơn hàng bằng cách (price * quantity) rồi cộng các phần tử ở listCart với nhau
  const total = listCart.reduce((total, currenValue) => {
    return total + currenValue.price * currenValue.quantity;
  }, 0);

  return (
    <div className="p-5 bg-light">
      <h3 className="fw-semibold text-uppercase pb-4">Cart Total</h3>
      <div className="d-flex justify-content-between border-bottom mb-3">
        <h5 className="fw-semibold text-uppercase">SubTotal</h5>
        <p className="text-secondary">{formatCurrency(total)}</p>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <h5 className="fw-semibold text-uppercase">Total</h5>
        <h5 className="fw-normal">{formatCurrency(total)}</h5>
      </div>

      <div>
        <input
          type="text"
          className="w-100 p-2"
          placeholder="Enter your coupon"
        />
        <button className="btn btn-page w-100 fst-normal p-2">
          <i className="fa fa-gift" aria-hidden="true"></i> Apply coupon
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
