import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Header = () => {

  
    const [btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("Header Render");

    return (
      <div className="header">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>

            <button className="login" onClick={() => {
              // setbtnNameReact("Logout");
              btnNameReact === "Login"
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
            }}
            >
              {btnNameReact}
            </button>

          </ul>
        </div>
      </div>
    );
  };

export default Header;

  // let btnName = "Login";
            {/* <button className="login" onClick={() => {
              btnName = "LogOut"
            }}>{btnName}</button>    in this case no UI will change so we use stateVariables in this case*/}  