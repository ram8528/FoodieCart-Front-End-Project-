import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      {/* <h2>Name :- {props.name}</h2> */}
      <h3>Count = {count}</h3>
      <h3>Count2 - {count2}</h3>
      <h3>Name : - {name}</h3>
      <h3>Location : Banglore</h3>
      <h4>Contact : - sk123hargarh@gmail.com</h4>
    </div>
  );
};

export default User;

// in functional component like this we used to setCount like function to update the state