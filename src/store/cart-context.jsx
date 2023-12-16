import { createContext, useContext, useReducer } from "react";

const MyContext = createContext();

const defaultState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      const alreadyExist = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingCartItem = state.items[alreadyExist];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[alreadyExist] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload.item];
      }
      const updatedAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case "DELETE":
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingIndex];

      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updated;

      if (existingItem.amount === 1) {
        updated = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        const updatedExistingItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updated = [...state.items];
        updated[existingIndex] = updatedExistingItem;
      }

      return {
        items: updated,
        totalAmount: updatedTotalAmount,
      };

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
