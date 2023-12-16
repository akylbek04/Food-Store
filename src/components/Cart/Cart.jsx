import CartModal from "../UI/CartModal";
import classes from "./Cart.module.css";

const Cart = ({ handleClose }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ name: "pizza", amount: 2, price: 12.99, id: "p1" }].map((meal) => (
        <li>{meal.name}</li>
      ))}{" "}
    </ul>
  );
  return (
    <CartModal handleClose={handleClose} >
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>132.40</span>
      </div>
      <div className={classes.actions}>
        <button onClick={handleClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </CartModal>
  );
};

export default Cart;
