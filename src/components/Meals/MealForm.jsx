import classes from "./MealForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealForm = ({onAddToCart}) => {
  const [isValid, setIsValid] = useState(true);
  const input = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let enteredAmount = input.current.value;
    let enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={input}
        label={"Amount"}
        input={{
          id: "",
          type: "",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isValid && <p>Enter valid amount!</p>}
    </form>
  );
};

export default MealForm;
