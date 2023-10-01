import BannerSection from "../components/UI/BannerSection";
import { useLocation } from "react-router-dom";
import CartTable from "../components/cartpage/cartTable";
import CartTotal from "../components/cartpage/cartTotal";
import CartNavigate from "../components/cartpage/cartNavigate";

import { useSelector } from "react-redux";

const CartPage = () => {
  // Tạo biến pathname sử dụng useLocation lấy pathname và xóa / ở trước pathname
  const pathname = useLocation().pathname.split("/");

  // Tạo biến listCart nhận state listCart từ store
  const listCart = useSelector((state) => state.cart.listCart);

  return (
    <div className="container">
      {/* Truyền vào component banner chung này props pathname để hiển thị */}
      <BannerSection pathname={pathname} />

      <h3 className="pt-5 pb-3 fw-normal text-uppercase">Shopping Cart</h3>

      <div className="row gx-4">
        <div className="col-xs-12 col-lg-8 overflow-x-scroll">
          <CartTable listCart={listCart} />
          <CartNavigate />
        </div>

        <div className="col-xs-12 col-lg-4">
          <CartTotal listCart={listCart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
