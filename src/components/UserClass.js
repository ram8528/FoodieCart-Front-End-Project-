import React from "react";
// import Contact from "./Contact";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        twitter_username: "Default",
        avatar_url: "Dummy",
      },
    };
    // console.log(this.props.name +"Child Cons");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child DiDMOUNT Called");

    // API Calls
    const data = await fetch("https://api.github.com/users/hiteshchoudhary");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {
      // console.log("Hii")
    }, 1000);
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("component will mount called");
  }

  render() {
    // console.log(this.props.name +"Child Render");
    // const {name,location} = this.props;
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;
    // debugger;
    // const {count,count2} = this.state;
    return (
      <div className="user-card">
        {/* <h2>Name :- {this.props.name}</h2>
        <h3>Location : {this.props.location}</h3> */}
        {/* <h2>Count: - {this.state.count}</h2> */}
        {/* <h2>Count: - {count}</h2> */}
        {/* <h2>Count2: - {this.state.count2}</h2> */}
        {/* <h2>Count2: - {count2}</h2> */}

        {/* <button onClick={() => {
            this.setState({
                count: this.state.count + 1,
                // count2: this.state.count2 + 1,
            })
        }}>Count Increase </button> */}

        <img
          src={avatar_url}
          alt="Refresh Page"
          style={{ width: "170px", height: "170px", borderRadius: "50%" }}
        />
        <h2>Name : - {name}</h2>
        <h3>Location : - {location}</h3>
        <h4>Contact : - {twitter_username}</h4>
        <div>
        <UserContext.Consumer>
            {/* {(data) => console.log(data)} */}
            {({ loggedInUser }) => <h1>LoggedInUser :- {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;

/*
Whole Life Cycle Method Working
    Constructor(Dummy)
    Render(dummy)
    <HTML Dummy>
    Component Did Mount
    <API CALL>
    <this.setState>

    ---- UPDATE
    render(API DATA)
    <HTML (new API data)
    component did update
*/
