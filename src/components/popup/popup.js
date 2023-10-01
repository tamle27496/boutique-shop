import styles from "./popup.module.css";
import formatCurrency from "../../hooks/formatCurrency";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

const Popup = (props) => {
  // Tạo biến product nhận dữ liệu từ props.product
  const product = props.product;

  // Tạo biến dispatch để sử dụng useDispatch
  const dispatch = useDispatch();

  // function closeModal dispatch 1 type lên store để đóng popup
  const closeModal = () => {
    dispatch({ type: "HIDE_POPUP" });
  };

  return (
    <>
      <div className={styles.modal}></div>
      <section className={styles.popup}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-7 m-auto p-4 bg-white">
              <div className="d-flex justify-content-end ">
                <h3
                  className="d-inline-block fst-normal px-2"
                  role="button"
                  onClick={props.onClosePopup}
                >
                  x
                </h3>
              </div>
              <div className="row gx-4 align-items-center ">
                <div className="col-6">
                  <img
                    className="w-100 d-block"
                    src={product.img1}
                    alt={product.name}
                  />
                </div>

                <div className="col-6">
                  <div className="d-flex flex-column">
                    <h3>{product.name}</h3>
                    <h4 className="text-body-tertiary fw-normal">
                      {formatCurrency(product.price)}
                    </h4>
                    <p className="text-body-tertiary">{product.short_desc}</p>
                    <div>
                      <Link
                        to={`/detail/${product._id.$oid}`}
                        className="btn btn-page px-4"
                        onClick={closeModal}
                      >
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>{" "}
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popup;
