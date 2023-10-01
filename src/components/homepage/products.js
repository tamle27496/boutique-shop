import styles from "../module css pages/HomePage.module.css";

import ProductItem from "../UI/ProductItem";

const Products = (props) => {
  // Tạo biến products nhận dữ liệu từ props.product
  const products = props.products;

  // Tạo biến filterProducts xét điều kiện, nếu products.length > 8 thì trả về 8 phần tử đầu tiên, ngược lại thì trả về products nếu products < 8
  const filterProducts =
    products.length > 8
      ? products.filter((product) => products[product] < 8)
      : products;

  // function onNavigateToId nhận id làm tham số và truyền ra HomePage để xử lí
  const onNavigateToId = (id) => () => {
    props.navigateButton(id);
  };

  return (
    <section className="products">
      <div className="container">
        <div className={`${styles["section-title"]}`}>
          <h6 className="text-body-tertiary">Made The Hard Way</h6>
          <h3>Top Trending Products</h3>
        </div>

        <div className="row g-5">
          {/* ilterProducts sau khi được lọc và map ra các productItem tương ứng*/}
          {filterProducts.map((product) => (
            <div className="col-sm-12 col-md-4 col-lg-3" key={product._id.$oid}>
              <ProductItem
                img1={product.img1}
                name={product.name}
                price={product.price}
                onNavigateToId={onNavigateToId(product._id.$oid)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
