import ProductItem from "../UI/ProductItem";
import { useNavigate } from "react-router-dom";
import FormCategory from "./formCategory";

const ProductList = (props) => {
  // Tạo biến products nhận dữ liệu từ props.products
  let products = props.products;

  // Tạo biến navigate sử dụng useNavigate
  const navigate = useNavigate();

  // function onNavigateToId nhận tham số id rồi navigate đến trang detail id tương ứng
  const onNavigateToId = (id) => () => {
    return navigate(`/detail/${id}`);
  };

  // Nếu pros.category === all thì trả về toàn bộ products
  if (props.category === "all") {
    products = products.map((product) => (
      <div className="col-xs-12 col-md-6 col-lg-4" key={product._id.$oid}>
        <ProductItem
          page={"shop"}
          name={product.name}
          img1={product.img1}
          price={product.price}
          onNavigateToId={onNavigateToId(product._id.$oid)}
        />
      </div>
    ));
  } else {
    // Ngược lại thì trả về các productItem có category tương ứng với props.category
    products = products
      .filter((product) => product.category === props.category)
      .map((product) => (
        <div className="col-xs-12 col-md-6 col-lg-4" key={product._id.$oid}>
          <ProductItem
            name={product.name}
            img1={product.img1}
            price={product.price}
            onNavigateToId={onNavigateToId(product._id.$oid)}
          />
        </div>
      ));
  }

  return (
    <>
      <div className="col-xs-12 col-lg-9">
        <FormCategory />

        <div className="row mb-5">
          {/* Thêm 1 điều kiện nếu products.length > 0 thì hiển thị products, ngc lại thì trả vê nội dung ở thẻ p */}
          {products.length > 0 ? (
            products
          ) : (
            <p>There are no products in this category!</p>
          )}
        </div>

        <div className="rows justify-content-end">
          <nav>
            <ul className="pagination">
              <li className="page-item  ">
                <span className="page-link rounded-0 text-secondary">
                  <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </span>
              </li>
              <li className="page-item " aria-current="page">
                <span className="page-link bg-dark text-white">1</span>
              </li>
              <li className="page-item" role="button">
                <span className="page-link rounded-0 text-secondary" href="#">
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rows justify-content-end ">
          <p className="text-secondary">Showing 1-9 of 9 results</p>
        </div>
      </div>
    </>
  );
};

export default ProductList;
