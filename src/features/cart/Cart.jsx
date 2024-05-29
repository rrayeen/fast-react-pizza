import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CarteItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();

  function handleClear() {
    if (cart.length === 0) return;
    dispatch(clearCart());
  }
  if (!cart.length) return <EmptyCart />;
  return (
    <div className=" px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-8 text-xl font-semibold">Your cart, {username}</h2>

      <ul className=" mt-3 divide-y divide-slate-200 border-b">
        {cart.map((item) => (
          <CarteItem item={item} key={item.pizzaId}></CarteItem>
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClear} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
