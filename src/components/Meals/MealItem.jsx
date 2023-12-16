import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import { useGlobalContext } from "../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const {  addItem } = useGlobalContext();
  const pricee = `$${price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{pricee}</div>
      </div>
      <div>
        <MealForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
