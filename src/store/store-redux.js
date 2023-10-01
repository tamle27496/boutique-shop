import { createStore } from "redux";

const counterReducer = (
  state = {
    popup: { status: false },
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
    cart: { listCart: JSON.parse(localStorage.getItem("listCart")) ?? [] },
    popupChat: false,
  },
  action
) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        popup: { status: true, data: action.data },
        currentUser: state.currentUser,
        cart: { listCart: state.cart.listCart },
        popupChat: state.popupChat,
      };

    case "HIDE_POPUP":
      return {
        popup: { status: false, data: action.data },
        currentUser: state.currentUser,
        cart: { listCart: state.cart.listCart },
        popupChat: state.popupChat,
      };

    case "GET_USER":
      return {
        popup: { status: false, data: action.data },
        currentUser: JSON.parse(localStorage.getItem("currentUser")),
        cart: { listCart: state.cart.listCart },
        popupChat: state.popupChat,
      };

    case "ON_LOGOUT":
      return {
        popup: { status: false, data: action.data },
        currentUser: localStorage.removeItem("currentUser"),
        cart: { listCart: state.cart.listCart },
        popupChat: state.popupChat,
      };

    case "ADD_CART":
      return {
        popup: { status: false, data: action.data },
        currentUser: state.currentUser,
        cart: { listCart: state.cart.listCart },
        popupChat: state.popupChat,
      };

    case "UPDATE_CART":
      return {
        popup: { status: false, data: action.data },
        currentUser: state.currentUser,
        cart: { listCart: JSON.parse(localStorage.getItem("listCart")) ?? [] },
        popupChat: state.popupChat,
      };

    case "DELETE_CART":
      return {
        popup: { status: false, data: action.data },
        currentUser: state.currentUser,
        cart: { listCart: JSON.parse(localStorage.getItem("listCart")) ?? [] },
        popupChat: state.popupChat,
      };

    case "TOGGLE_CHAT":
      return {
        popup: { status: false, data: action.data },
        currentUser: state.currentUser,
        cart: { listCart: state.cart.listCart },
        popupChat: !state.popupChat,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
