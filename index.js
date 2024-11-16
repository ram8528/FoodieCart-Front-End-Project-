import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1","" , "namaste react"
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading1 = (
    <h1 className="heading">namaste react</h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
//When you use ReactDOM.createRoot(), you are telling React to take control of the DOM element you passed (document.getElementById('root')) and allow React to manage rendering within that area.
root.render(heading1);

const heading2 = React.createElement(
    "h1", " ", "Hii This is Ramdeep Kesharwani"  
);
const root2 = ReactDOM.createRoot(document.getElementById('parent'));
root2.render(heading2);

const Title = () => (   // it is React Element(Title)
    <h1 className="head" tabIndex={5}>
        Namaste React Using JSX🚀
    </h1>
);
// Both are valid JS Syntax 
// const Title = function() {
//   return (
//   <h1 className="head" tabIndex={5}>
//       Namaste React Using JSX🚀 Using Title
//   </h1>
//   );
// };

root2.render(<Title/>)

// Component Composition
const HeadingComponent = () => (
    <>
      <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
      <div id="container-2"></div>
    </>
  );
// const root3 = ReactDOM.createRoot(document.getElementById('child'))
// root3.render(<HeadingComponent/>);


//React Functional Component

// const HeadingComponent = () =>{
//   return <h1>Namaste React Using Functional Component1</h1>;
// };

// const HeadingComponent2 = () => (
//   <h1>Namaste React Using Functional Component2</h1>
// );

// const HeadingComponent3 = () =><h1>Namaste React Using Functional Component3</h1>;
// All of three are same thing think and understand


// Using ReacT ELement inside react Component


const elem = <span>This is a React Element & value is 3000</span>

const NewElemTitle = () => (
  <h1 className="headTitle">
    {elem}
  </h1>
);

const data = 10000; // suppose data is coming from any api like const data = api.getData() in this case cross site scripting attack is possible but dont worry JSX will take care of it JSX will sanitise data before use it.

const reactele = (
  <div>
  <h1> Hii Ramdeep You are under reactele</h1>
  {data}
  <NewElemTitle/> 
  <NewElemTitle></NewElemTitle>
  </div>
);
// those above 87 and 88 are same 

const root3 = ReactDOM.createRoot(document.getElementById('child2'))
// root3.render(<NewElemTitle/>);
root3.render(reactele)