import { useDispatch, useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { updateName } from "../features/user/userSlice";

function Home() {
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();
  function handleEdit(e) {
    e.preventDefault();
    dispatch(updateName(""));
  }
  return (
    <div className=" my-10 text-center sm:my-6">
      <h1 className="  mb-8 text-xl font-semibold md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser></CreateUser>
      ) : (
        <div className="flex items-center justify-center gap-3 sm:gap-6 ">
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
          <Button onClick={handleEdit} type="secondary">
            Edit your name
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
