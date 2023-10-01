import { Link } from "react-router-dom";

const CartNavigate = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-light">
      <Link to={"/shop"} className="text-secondary">
        <i className="fa-solid fa-left-long text-dark"></i> Continue shopping
      </Link>
      <Link to={"/checkout"} className="border border-dark p-2 text-secondary">
        Proceed to checkout <i className="fa-solid fa-right-long text-dark"></i>
      </Link>
    </div>
  );
};

export default CartNavigate;
