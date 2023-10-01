import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../components/module css pages/RegisterPage.module.css";
import { useState, useEffect } from "react";
import getUser from "../storages/getUser";
import { useDispatch } from "react-redux";

const AuthPage = () => {
  // Sử dụng useLocation() để xác định đường dẫn
  const location = useLocation();
  const pathname = location.pathname;

  // Trả về boolean để đặt điều kiện hiển thị giao diện
  const isLogin = pathname === "/login";

  // Khởi tạo useState values lấy các giá trị từ input form
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Khởi tạo useState validations thông báo lỗi khi người dùng nhập form
  const [validations, setValidations] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Khởi tạo state userArr
  const [userArr, setUserArr] = useState([]);

  // Load userArr khi chuyển đến AuthPage
  useEffect(() => {
    const users = getUser() ?? [];
    setUserArr(users);
  }, []);

  // Khởi tạo array filterUserArr để lọc ra array có email đã tồn tại ở input email
  const filterUserArr = userArr.filter((user) => user.email === values.email);

  // Function validate khi người dùng submit form
  const validateOnSubmit = () => {
    // Khởi tạo các key name,email,password tương ứng các key của state users ban đầu
    const { name, email, password, phone } = values;

    // Khởi tạo object validations với các key : value (rỗng) sẽ trả về lỗi khi điều kiện input sai
    const validations = { name: "", email: "", password: "", phone: "" };

    // Khởi tạo biến isValid = true mặc định form chưa xảy ra lỗi
    let isValid = true;

    // Nếu input name = "" hay người dùng không điền input => trả thông báo lỗi
    if (pathname === "/register" && !name) {
      validations.name = "Name is required";
      isValid = false;
    }

    // Nếu input name != "" hay người dùng điền input nhưng số kí tự < 3 || > 50 => sai điều kiện, trả thông báo lỗi
    if ((name && name.length < 3) || name.length > 50) {
      validations.name = "Name must contain between 3 and 50 characters";
      isValid = false;
    }

    // Nếu input email = "" hay người dùng không điền input => trả thông báo lỗi
    if (!email) {
      validations.email = "Email is required";
      isValid = false;
    }

    // Nếu input email != "" hay người dùng điền input nhưng sai định dạng email => sai điều kiện, trả thông báo lỗi
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "Email format must be as example@mail.com";
      isValid = false;
    }

    // Nếu input email đã tồn tại => sai điều kiện, trả thông báo lỗi
    if (pathname === "/register" && email && filterUserArr.length > 0) {
      validations.email =
        "This email already exists, please choose another email!";
      isValid = false;
    }

    // Nếu input password = "" hay người dùng không điền input => trả thông báo lỗi
    if (!password) {
      validations.password = "Password is required";
      isValid = false;
    }

    // Nếu input password != "" hay người dùng điền input nhưng < 8 kí tự => sai điều kiện, trả thông báo lỗi
    if (password && password.length < 8) {
      validations.password = "Password must be longer than 8 characters";
      isValid = false;
    }

    // Nếu input phone = "" hay người dùng không điền input => trả thông báo lỗi
    if (pathname === "/register" && !phone) {
      validations.phone = "Phone is required";
      isValid = false;
    }

    // Nếu input phone != "" hay người dùng điền input nhưng < 10 kí tự => sai điều kiện, trả thông báo lỗi

    if (phone && !/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone)) {
      validations.email =
        "The phone number is NOT valid!, please enter a valid 10 digit number";
      isValid = false;
    }

    // Nếu biến isValid = false, setState validations cùng các thông báo lỗi
    if (!isValid) {
      setValidations(validations);
    }

    // Vượt qua các điều kiện thì trả về isValid = true
    return isValid;
  };

  // Function validate khi blur các input
  const validateOnBlur = (event) => {
    // Xác định xem input nào vừa thoát focus bằng thuộc tính name
    const { name } = event.target;

    //transformName dùng để biến chữ cái đầu của string thành chữ hoa vì thuộc tính name của các input không được đặt chữ hoa vd: name="name" => name="Name" cải thiện giao diện
    const transformName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    // Khởi tạo biến value lấy giá trị của input tương ứng từ state values
    const value = values[name];

    // Khởi tạo biến message để đổ thông báo lỗi
    let message = "";

    // Nếu input blur = "" hay người dùng không điền input => trả thông báo lỗi xuống bên dưới input tương ứng
    if (!value) {
      message = `${transformName} is required`;
    }

    // Nếu input != "" và input có name="name" và người dùng điền input nhưng số kí tự < 3 || > 50 => sai điều kiện, trả thông báo lỗi vào biến message
    if (value && name === "name" && (value.length < 3 || value.length > 50)) {
      message = "Name must contain between 3 and 50 characters";
    }

    // Nếu input != "" và input có name="email" và người dùng điền input nhưng sai định dạng email => sai điều kiện, trả thông báo lỗi vào biến message
    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
    }

    // Nếu input email đã tồn tại => sai điều kiện, trả thông báo lỗi
    if (
      pathname === "/register" &&
      value &&
      name === "email" &&
      filterUserArr.length > 0
    ) {
      message = "This email already exists, please choose another email!";
    }

    // Nếu input != "" và input có name="password" và người dùng điền input nhưng password < 8 kí tự => sai điều kiện, trả thông báo lỗi vào biến message
    if (value && name === "password" && password.length < 8) {
      message = "Password must be longer than 8 characters";
    }

    // Nếu input != "" và input có name="phone" và người dùng điền input nhưng sai định dạng số điện thoại => sai điều kiện, trả thông báo lỗi vào biến message
    if (
      value &&
      name === "phone" &&
      !/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)
    ) {
      message =
        "The phone number is NOT valid!, please enter a valid 10 digit number";
    }

    // Nếu có lỗi thì setState validation bằng cách copy các lỗi trước đó và thay thế các key input cũ bằng lỗi mới
    setValidations({ ...validations, [name]: message });
  };

  // Function nhận biết sự thay đổi value của các input
  const handleChange = (event) => {
    const { name, value } = event.target;

    // setState values khi người dùng điền input
    setValues({ ...values, [name]: value });
  };

  // Khởi tạo biến navigate
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Function thực hiện khi người dùng submit form
  const handleSubmit = (event) => {
    // Tránh trang bị load lại khi người dùng submit
    event.preventDefault();

    // Khởi tạo isValid, gọi hàm validateSubmit() để xác định trạng thái boolean của biến isValid
    const isValid = validateOnSubmit();

    // Nếu isValid = false return false
    if (!isValid) {
      return false;
    }

    // Nếu trang web có pathname là /login
    if (pathname === "/login") {
      // Tìm kiếm trong userArr có user nào thỏa mãn điều kiện email và password giống với input form không
      const loginUser = userArr.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      // Nếu login user có tồn tại
      if (loginUser) {
        //thì localStorage.setItem user đó vào key currentUser để xác định xem tài khoản có đăng nhập không khi refresh lại trang
        localStorage.setItem("currentUser", JSON.stringify(loginUser));

        // Dispatch lên store redux type get_user để update lại state currentUser
        dispatch({ type: "GET_USER" });

        // Chuyển hướng về homepage
        return navigate("/");
      } // Nếu login user không tồn tại
      else {
        // Thông báo cho người dùng nhập lại
        alert("Email or password is incorrect, please log in again!");
        return false;
      }
    }

    // Nếu trang web có pathname là /register
    if (pathname === "/register") {
      // push state values vào userArr
      userArr.push(values);

      // Cập nhật array userArr ở localstorage
      localStorage.setItem("userArr", JSON.stringify(userArr));

      // Clear input form và clear các state thông báo lỗi khi người dùng chuyển trang hoặc click sang /login
      clearInputForm();

      // Chuyển hướng về /login để người dùng thực hiện đăng nhập
      return navigate("/login");
    }
  };

  // Funtion thực hiện clear các trường đầu vào của form và clear các lỗi của form khi navigate link
  const clearInputForm = () => {
    setValues({ name: "", email: "", password: "", phone: "" });
    setValidations({ name: "", email: "", password: "", phone: "" });
  };

  const { name, email, password, phone } = values;

  const {
    name: nameVal,
    email: emailVal,
    password: passwordVal,
    phone: phoneVal,
  } = validations;

  return (
    <section className={`${styles["bg-image"]}`}>
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-5 p-5 bg-white rounded-4 shadow">
            <h2 className="text-center pb-5">
              {isLogin ? "Sign in" : "Sign up"}
            </h2>
            <form className="rows flex-column" onSubmit={handleSubmit}>
              <div className={styles["form-input"]}>
                {!isLogin && (
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={validateOnBlur}
                    placeholder="Full Name"
                  />
                )}
                {!isLogin && nameVal && (
                  <p className="text-danger">{nameVal}</p>
                )}

                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={validateOnBlur}
                  placeholder="Email"
                />
                {emailVal && <p className="text-danger">{emailVal}</p>}

                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={validateOnBlur}
                  placeholder="Password"
                />
                {passwordVal && <p className="text-danger">{passwordVal}</p>}

                {!isLogin && (
                  <input
                    className={styles.input}
                    type="phone"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    onBlur={validateOnBlur}
                    placeholder="Phone"
                  />
                )}
                {!isLogin && phoneVal && (
                  <p className="text-danger">{phoneVal}</p>
                )}
              </div>

              <div className={styles["form-button"]}>
                <button className="btn btn-page w-100" type="submit">
                  {isLogin ? "Sign in" : "Sign up"}
                </button>
              </div>
            </form>
            <p className="text-center">
              {isLogin ? "Create an account?" : "Login?"}{" "}
              <Link
                to={isLogin ? "/register" : "/login"}
                onClick={clearInputForm}
              >
                {isLogin ? "Sign up" : "Click"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
