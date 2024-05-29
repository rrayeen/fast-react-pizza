import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, children }) {
  const dispatch = useDispatch();

  function handleInc(pizzaId) {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDec(pizzaId) {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => handleDec(pizzaId)}>
        -
      </Button>
      {children}
      <Button type="round" onClick={() => handleInc(pizzaId)}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
