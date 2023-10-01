import BannerSection from "../components/UI/BannerSection";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/checkoutpage/checkoutForm";
import CheckoutTotal from "../components/checkoutpage/checkoutTotal";

import { useSelector } from "react-redux";

const CheckoutPage = () => {
  // Tạo biến pathname sử dụng useLocation lấy pathname và xóa / ở trước pathname
  const pathname = useLocation().pathname.split("/");

  // Tạo biến listCart nhận state listCart từ store
  const listCart = useSelector((state) => state.cart.listCart);
  return (
    <div className="container">
      {/* Truyền vào component banner chung này props pathname để hiển thị */}
      <BannerSection pathname={pathname} />

      <h3 className="pt-5 pb-3 fw-normal text-uppercase">Billing Details</h3>

      <div className="row gx-4 mb-5">
        <div className="col-md-6 col-lg-8">
          <CheckoutForm />
        </div>

        <div className="col-md-6 col-lg-4">
          <CheckoutTotal listCart={listCart} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
