import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("Header Render");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser)

  // Subscribing to the store using our Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-300 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-40" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li className="px-4 font-extrabold ">
            <Link to="/cart">Cart({cartItems.length}</Link> )
          </li>

          <button
            className="login"
            onClick={() => {
              // setbtnNameReact("Logout");
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// let btnName = "Login";
{
  /* <button className="login" onClick={() => {
              btnName = "LogOut"
            }}>{btnName}</button>    in this case no UI will change so we use stateVariables in this case*/
}
