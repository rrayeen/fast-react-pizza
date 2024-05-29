import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  if (totalCartQuantity === 0) return;
  return (
    <div className=" flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className=" space-x-4 font-semibold text-stone-200 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice}$</span>
      </p>
      <Link to="/carte">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
