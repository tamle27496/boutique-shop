import TableItem from "./table/tableItem";

const CartTable = (props) => {
  // Tạo biến listCart nhận dữ liêu từ props.listCart
  const listCart = props.listCart;

  return (
    <table className="table table-hover text-center mb-5 ">
      <thead className="bg-light">
        <tr>
          <th className="fw-semibold text-uppercase bg-light p-3" scope="col">
            Image
          </th>
          <th className="fw-semibold text-uppercase bg-light p-3" scope="col">
            Product
          </th>
          <th className="fw-semibold text-uppercase bg-light p-3" scope="col">
            Price
          </th>
          <th className="fw-semibold text-uppercase bg-light p-3" scope="col">
            Quantity
          </th>
          <th className="fw-semibold text-uppercase bg-light p-3" scope="col">
            Total
          </th>
          <th className="fw-semibold text-uppercase bg-light p-3" scope="col">
            Remove
          </th>
        </tr>
      </thead>
      <tbody className="">
        {/* Nếu listCart .lenth > 0 thì return về các tableItem, ngc lại thì return về thẻ td No Cart */}
        {listCart.length > 0 ? (
          listCart.map((product) => (
            <TableItem
              key={product._id.$oid}
              listCart={listCart}
              product={product}
            />
          ))
        ) : (
          <tr>
            <td>No cart</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
