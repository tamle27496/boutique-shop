import styles from "./chat.module.css";
import { useDispatch } from "react-redux";

const Chat = () => {
  // Tạo biến dispatch sử dụng useDispatch
  const dispatch = useDispatch();

  // function onToggleChat dispatch type lên store Redux cập nhật trạng thái của popupChat
  const onToggleChat = () => {
    dispatch({ type: "TOGGLE_CHAT" });
  };

  return (
    <div className={styles.chat} onClick={onToggleChat}>
      <img className="w-100" src="./images/chat.png" alt="chat" />
    </div>
  );
};

export default Chat;
