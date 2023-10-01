import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../components/homepage/banner";
import Categories from "../components/homepage/categories";
import Products from "../components/homepage/products";
import Services from "../components/homepage/services";
import Subcribe from "../components/homepage/subcribe";
import Popup from "../components/popup/popup";

const HomePage = (props) => {
  // Tạo biến popup nhận state popup từ store
  const popup = useSelector((state) => state.popup);

  // Tạo biến dispath để sử dụng useDispatch
  const dispatch = useDispatch();

  // Function dataPopup nhận id làm tham số
  const dataPopup = (id) => {
    // Tạo biến data lọc ra các product có id trùng với id là tham số truyền vào function
    const data = props.products.filter((product) => product._id.$oid === id);

    // dispatch lên store type để hiển thị popup kèm dữ liệu
    dispatch({
      type: "SHOW_POPUP",
      data: data[0],
    });
  };

  // function changeStatusPopup để đóng popup bằng cách dispatch lên store cập nhật state popup
  const changeStatusPopup = () => {
    dispatch({
      type: "HIDE_POPUP",
    });
  };

  return (
    <>
      <Banner />
      <Categories />
      {/* Nếu tồn tại props.products thì mới hiển thì Products */}
      {props.products && (
        <Products products={props.products} navigateButton={dataPopup} />
      )}
      <Services />
      <Subcribe />

      {/* Nếu tồn tại props.status và popup.data thì  hiển thì Popup */}
      {popup.status &&
        popup.data &&
        createPortal(
          <Popup product={popup.data} onClosePopup={changeStatusPopup} />,
          document.getElementById("modal")
        )}
    </>
  );
};

export default HomePage;
