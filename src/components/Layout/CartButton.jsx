import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>8</span>
    </button>
  );
};

export default CartButton;
