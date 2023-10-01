import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AuthPage from "./pages/AuthPage";
import RootLayout from "./components/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";

import { useSelector } from "react-redux";

function App() {
  // TẠo state products để nhận dữ liệu sau khi fecth API
  const [products, setProducts] = useState([]);

  // Tạo biến listCart nhận state listCart từ store
  const listCart = useSelector((state) => state.cart.listCart);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );

      // Nếu fetch không thành công thì throw lỗi
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      // Fetch thành công thì set data vào state products
      setProducts(data);
    };

    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage products={products} /> },
        { path: "shop", element: <ShopPage products={products} /> },
        {
          path: "detail/:productId",
          element: <DetailPage products={products} />,
        },
        { path: "cart", element: <CartPage listCart={listCart} /> },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "login", element: <AuthPage /> },
        { path: "register", element: <AuthPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
