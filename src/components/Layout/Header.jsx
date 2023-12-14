import React from "react";
import img from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React meals</h1>
        <p>Cart</p>
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="a table full of meals" />
      </div>
    </>
  );
};

export default Header;
