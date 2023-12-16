import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => (prev = true));
  };
  const handleClose = () => {
    setOpen((prev) => (prev = false));
  };

  return (
    <>
      {open && <Cart handleClose={handleClose}  />}
      <Header handleOpen={handleOpen}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
