import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  // Tạo biến navigate sử dụng useNavigate
  const navigate = useNavigate();

  // Tạo biến location sử dụng useLocation để lấy pathname
  const location = useLocation().pathname;

  // Tạo biến currentUser để lấy state currentUser trên store
  const currentUser = useSelector((state) => state.currentUser);

  // Tạo biến dispatch sử dụng useDispatch
  const dispatch = useDispatch();

  // function onLogout dispatch 1 type lên store để logout
  const onLogout = () => {
    dispatch({ type: "ON_LOGOUT" });

    // Sau khi dispatch, cập nhât state trên store thì navigate về /login
    navigate("/login");
  };

  return (
    <>
      <Navbar expand="lg" className="position-relative p-3">
        <div className="container">
          <Navbar.Brand
            className="position-absolute top-50 start-50 translate-middle "
            href="#"
          >
            BOUTIQUE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-lg-flex justify-content-between w-100 ">
              <div className="rows flex-column flex-lg-row">
                <Nav.Link
                  // Xác định pathname đang ở đâu để set class active
                  className={`fw-semibold me-3 ${
                    location === "/" ? "active" : ""
                  }`}
                  onClick={() => navigate("/")}
                  role="button"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  // Xác định pathname đang ở đâu để set class active
                  className={`fw-semibold ${
                    location === "/shop" ? "active" : ""
                  }`}
                  onClick={() => navigate("shop")}
                  role="button"
                >
                  Shop
                </Nav.Link>
              </div>

              <div className="rows flex-column flex-lg-row">
                <Nav.Link
                  // Xác định pathname đang ở đâu để set class active
                  className={`fw-semibold me-3 ${
                    location === "/cart" ? "active" : ""
                  }`}
                  onClick={() => navigate("cart")}
                  role="button"
                >
                  <i className="fas fa-dolly-flatbed"></i> Cart
                </Nav.Link>
                {/* Nếu currentUser tồn tại thì trả về navlink có username và button logout */}
                {currentUser ? (
                  <Nav.Link className="fw-semibold" role="button">
                    <i className="fa fa-user" aria-hidden="true"></i>{" "}
                    {currentUser.name}{" "}
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                    <span onClick={onLogout}> (Logout)</span>
                  </Nav.Link>
                ) : (
                  // Không tồn tại currentUser thì trả về navlink login
                  <Nav.Link
                    className={`fw-semibold me-3 ${
                      // Xác định xem pathname có = login và register không để set class active
                      location === "/login" || location === "/register"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => navigate("login")}
                    role="button"
                  >
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
