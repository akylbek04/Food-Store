import { useGlobalContext } from "../../store/cart-context";
import CartModal from "../UI/CartModal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = ({ handleClose }) => {
  const { totalAmount, items, removeItem, addItem } = useGlobalContext();

  const handleCartItemRemove = (id) => {
    removeItem(id);
  };

  const handleCartItemAdd = (item) => {
    addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((meal) => {
        let obj = {
          ...meal,
          onAdd: handleCartItemAdd.bind(null, meal),
          onRemove: handleCartItemRemove.bind(null, meal.id),
        };
        return <CartItem {...obj} key={meal.id} />;
      })}{" "}
    </ul>
  );
  return (
    <CartModal handleClose={handleClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={handleClose} className={classes["button--alt"]}>
          Close
        </button>
        {!!items.length && <button className={classes.button}>Order</button>}
      </div>
    </CartModal>
  );
};

export default Cart;
