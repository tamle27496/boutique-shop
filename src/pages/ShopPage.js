import { useState } from "react";
import Category from "../components/shoppage/category";
import ProductList from "../components/shoppage/ProductList";
import BannerSection from "../components/UI/BannerSection";
import { useLocation } from "react-router-dom";

const ShopPage = (props) => {
  // Tạo biến pathname sử dụng useLocation lấy pathname và xóa / ở trước pathname
  const pathname = useLocation().pathname.split("/");

  // Tạo state category nhận giá trị từ Component Category truyền ra, mặc định là all
  const [category, setCategory] = useState("all");

  // Nhận giá trị từ Component Category truyền ra và setState
  const setToggleCategory = (category) => {
    setCategory(category);
  };

  return (
    <>
      <section>
        <div className="container">
          <BannerSection pathname={pathname} />

          <div className="row mt-5 gx-4">
            <Category active={category} onToggeCategory={setToggleCategory} />
            <ProductList products={props.products} category={category} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
