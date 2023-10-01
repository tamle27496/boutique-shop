import { useSelector } from "react-redux";
import styles from "./popupChat.module.css";

const PopupChat = () => {
  // Tạo biến popupChat nhận giá trị state popupChat từ store
  const popupChat = useSelector((state) => state.popupChat);

  return (
    <div
      // Nếu popupChat tồn tại thì set class active hiển thị popup, ngc lại trả về rỗng, popup không hiển thị
      className={`${styles["popup-chat"]} border rounded-4 ${
        popupChat ? styles.active : ""
      }`}
    >
      <div className="rows border-bottom p-4 align-items-center">
        <div className="col-9 ">
          <h5 className="fst-normal">Customer Support</h5>
        </div>
        <div className="col-3">
          <p
            className="bg-light text-secondary py-2 text-center"
            style={{ fontSize: "13px" }}
          >
            Let's Chat App
          </p>
        </div>
      </div>

      <div className="rows pb-5">
        <div className="col-sm-12 col-lg-9 p-3">
          <div className={`d-flex ${styles.user}`}>
            <div className="py-2">
              <p className="bg-primary p-2 text-light">Xin chào</p>
            </div>
          </div>

          <div className={`d-flex ${styles.user}`}>
            <div className="py-2">
              <p className="bg-primary p-2 text-light">
                Làm thế nào để xem các sản phẩm
              </p>
            </div>
          </div>

          <div className={`d-flex align-items-center py-2 ${styles["admin"]}`}>
            <img
              className={styles["img-admin"]}
              src="./images/admin.png"
              alt="admin"
            />
            <p className="bg-light p-2 text-secondary">ADMIN: Chào bạn</p>
          </div>

          <div className={`d-flex align-items-center py-2 ${styles["admin"]}`}>
            <img
              className={styles["img-admin"]}
              src="./images/admin.png"
              alt="admin"
            />
            <p className="bg-light p-2 text-secondary">
              ADMIN: Bạn có thể vào mục shop để xem các sản phẩm
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3"></div>
      </div>

      <div className="rows border-top bg-light p-3">
        <div className="col-sm-12 col-lg-9">
          <div className="rows align-items-center ">
            <div className="col-2">
              <img
                className={styles["img-admin"]}
                src="./images/admin.png"
                alt=""
              />
            </div>

            <div className="col-6">
              {" "}
              <input className="p-1" type="text" placeholder="Enter Message!" />
            </div>

            <div className="col-4">
              <div className={styles["icon-chat"]}>
                <i className="fa-solid fa-paperclip text-secondary"></i>
                <i className="fa-solid fa-face-smile text-secondary"></i>
                <i className="fa-solid fa-paper-plane text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupChat;
