import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  getCart,
  getCurrentQuantity,
  increaseItemQuantity,
  removeItem,
} from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const currentQuantity = useSelector(getCurrentQuantity(id));

  function handleAddItem() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    const item = cart.find((item) => item.pizzaId === newPizza.pizzaId);
    if (item) dispatch(increaseItemQuantity(item.pizzaId));
    else dispatch(addItem(newPizza));
  }
  function handleDelete(pizzaId) {
    dispatch(removeItem(pizzaId));
  }

  return (
    <li className="flex  gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={` h-24 ${soldOut && " opacity-75 grayscale"}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>

        <div className=" mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className=" text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="stroke-neutral-500 text-sm font-medium uppercase">
              Sold out
            </p>
          )}
          {currentQuantity > 0 ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id}>
                <p className="font-semibold">{currentQuantity}</p>
              </UpdateItemQuantity>
              <DeleteItem handleDelete={handleDelete} pizzaId={id}></DeleteItem>
            </div>
          ) : null}

          {!soldOut && !currentQuantity && (
            <Button onClick={handleAddItem} type="small">
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
