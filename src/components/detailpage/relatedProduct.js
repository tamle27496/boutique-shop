import ProductItem from "../UI/ProductItem";
import { useNavigate } from "react-router-dom";

const RelatedProduct = (props) => {
  // Tạo biến navigate để sử dụng useNAvigate()
  const navigate = useNavigate();

  // Function onNavigateToId nhận id lam tham số và navigate đến trang có id đó
  const onNavigateToId = (id) => () => {
    return navigate(`/detail/${id}`);
  };

  return (
    <div className="col-xs-12 col-md-6 col-lg-3">
      <ProductItem
        name={props.product.name}
        img1={props.product.img1}
        price={props.product.price}
        onNavigateToId={onNavigateToId(props.product._id.$oid)}
      />
    </div>
  );
};

export default RelatedProduct;
