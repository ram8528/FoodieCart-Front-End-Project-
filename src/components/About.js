import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{ // this can also be done directly
    constructor(props){
        super(props);
        // console.log("Parent Cons");
    }

    componentDidMount() {
        // console.log("Parent DiDMOUNT Called");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Food Delivery About Page</h2>
                {/* <User name= {"Ramdeep Via Functional"}/> */}
                <UserClass name= {"Ramdeep Kesharwani"} location = {"Noida"}/>
                {/* <UserClass name= {"Kumar Vishal"} location = {"Noida"}/> */}
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Food Delivery About Page</h2>
//             {/* <User name= {"Ramdeep Via Functional"}/> */}
//             <UserClass name= {"Ramdeep Kesharwani"} location = {"Noida"}/>
//         </div>
//     );
// };

export default About;

// Parent Cons
// About.js:17 Parent Render
// UserClass.js:12 Ramdeep KesharwaniChild Cons
// UserClass.js:22 Ramdeep KesharwaniChild Render
// UserClass.js:12 Kumar VishalChild Cons
// UserClass.js:22 Kumar VishalChild Render
//  DOM UPdated In single batch- 
// UserClass.js:16 Ramdeep KesharwaniChild DiDMOUNT Called
// UserClass.js:16 Kumar VishalChild DiDMOUNT Called
// About.js:13 Parent DiDMOUNT Called