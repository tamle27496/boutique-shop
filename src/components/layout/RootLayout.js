import PopupChat from "../popup/popupChat";
import Chat from "./chat";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <main>{props.children}</main>
      <Chat />
      <PopupChat />
      <Footer />
    </>
  );
};

export default RootLayout;
