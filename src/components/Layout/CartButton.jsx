import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useGlobalContext } from "../../store/cart-context";

const CartButton = ({ handleOpen }) => {
  const { totalAmount, items } = useGlobalContext();

  const total = items.reduce((curr, el) => (curr += el.amount), 0);
  return (
    <button onClick={handleOpen} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
