import { useParams } from "react-router-dom";
import ImageProduct from "../components/detailpage/imageProduct";
import InfoProduct from "../components/detailpage/infoProduct";
import DescriptionProduct from "../components/detailpage/descriptionProduct";
import RelatedProduct from "../components/detailpage/relatedProduct";
import ErrorPage from "./ErrorPage";

const DetailPage = (props) => {
  // Tạo biến params sử dụng useParams
  const params = useParams();

  // Tạo biến detailProduct tìm kiếm trong props.products các thuộc tính có id trùng với param id
  const detailProduct = props.products.filter(
    (product) => product._id.$oid === params.productId
  );

  // Tao biến relatedProduct tìm kiếm props.products các phần tử có cùng category và không trùng id với phần tử ở detailProduct
  const relatedProduct = props.products.filter(
    (product) =>
      product.category === detailProduct[0].category &&
      product._id.$oid !== detailProduct[0]._id.$oid
  );

  return (
    <section className="shop">
      {/* Nếu detailProduct.length > 0 thì render ra các thành phần tương ứng  */}
      {detailProduct.length > 0 ? (
        detailProduct.map((product) => (
          <div className="container" key={product._id.$oid}>
            <div className="detail-product mb-5">
              <div className="row align-items-center">
                <div className="col-sm-12 col-lg-6 mb-5 ">
                  <ImageProduct product={product} />
                </div>

                <div className="col-lg-6 ">
                  <InfoProduct product={product} />
                </div>
              </div>
            </div>

            <div className="detail-description mb-5">
              <div className="row">
                <div>
                  <button className="btn btn-page text-uppercase mb-4">
                    Description
                  </button>
                </div>

                <h4 className="text-uppercase fw-normal mb-4">
                  Product Description
                </h4>

                <div className="col-12">
                  <DescriptionProduct long_desc={product.long_desc} />
                </div>
              </div>
            </div>

            <div className="related-product">
              <div className="row">
                <h4 className="text-uppercase fw-normal mb-4">
                  Related Product
                </h4>

                {/* Hiển thị các RelatedProduct có cùng category */}
                {relatedProduct.map((product) => (
                  <RelatedProduct key={product._id.$oid} product={product} />
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <ErrorPage />
      )}
    </section>
  );
};

export default DetailPage;
