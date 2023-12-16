import { createContext, useContext, useReducer } from "react";

const MyContext = createContext();

const defaultState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      const updatedCart = state.items.concat(action.payload.item);
      const updatedAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.amount;
      return {
        items: updatedCart,
        totalAmount: updatedAmount,
      };
    case "DELETE":
      const filtered = state.items.filter((meal) => meal !== action.payload.id);
      return [...filtered];
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, defaultState);
  const handleAdd = (item) => {
    dispatch({
      type: "ADD",
      payload: { item },
    });
  };

  const handleClose = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const obj = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: handleAdd,
    removeItem: handleClose,
  };

  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
};

export default CartProvider;

export const useGlobalContext = () => {
  return useContext(MyContext);
};
