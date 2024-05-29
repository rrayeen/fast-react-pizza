import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { removeItem } from "./cartSlice";

import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleDelete(pizzaId) {
    dispatch(removeItem(pizzaId));
  }

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <UpdateItemQuantity pizzaId={pizzaId}>
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        </UpdateItemQuantity>
        <DeleteItem handleDelete={handleDelete} pizzaId={pizzaId}></DeleteItem>
        {/* <Button onClick={() => handleDelete(pizzaId)} type="small">
          DELETE
        </Button> */}
      </div>
    </li>
  );
}

export default CartItem;
