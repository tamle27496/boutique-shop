const ImageProduct = (props) => {
  // Tạo biến product nhận dữ liệu từ props.product
  const product = props.product;
  return (
    <div className="row">
      <div className="col-2">
        <div className="row g-2">
          <div className="col-12">
            <img className="w-100" src={product.img1} alt={product.name} />
          </div>
          <div className="col-12">
            <img className="w-100" src={product.img2} alt={product.name} />
          </div>
          <div className="col-12">
            <img className="w-100" src={product.img3} alt={product.name} />
          </div>
          <div className="col-12">
            <img className="w-100" src={product.img4} alt={product.name} />
          </div>
        </div>
      </div>

      <div className="col-10">
        <img className="w-100" src={product.img1} alt={product.name} />
      </div>
    </div>
  );
};

export default ImageProduct;
