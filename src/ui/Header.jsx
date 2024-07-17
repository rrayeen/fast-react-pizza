import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="  flex items-center justify-between bg-yellow-500 px-4 py-4 uppercase">
      <Link className=" tracking-widest" to="/">
        Fastest Pizza Co.
      </Link>
      <SearchOrder></SearchOrder>
      <Username></Username>
    </header>
  );
}

export default Header;
