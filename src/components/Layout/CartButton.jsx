import React, { useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useGlobalContext } from "../../store/cart-context";

const CartButton = ({ handleOpen }) => {
  const [highlight, setHighlight] = useState(false);
  const { items } = useGlobalContext();
  const total = items.reduce((curr, el) => (curr += el.amount), 0);

  useEffect(() => {
    if(items.length === 0) return;

    setHighlight(true);
    let timeout = setTimeout(() => {
      setHighlight(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [items]);

  const btnClass = `${classes.button} ${highlight ? classes.bump : ""}`;

  return (
    <button onClick={handleOpen} className={btnClass}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
