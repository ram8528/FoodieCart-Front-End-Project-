import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1","" , "namaste react"
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));

const heading1 = (
    <h1 className="heading">namaste react</h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading1);

const heading2 = React.createElement(
    "h1", " ", "Hii This is Ramdeep Kesharwani"  
);
const root2 = ReactDOM.createRoot(document.getElementById('parent'));
root2.render(heading2);

const Title = () => (
    <h1 className="head" tabIndex={5}>
        Namaste React Using JSX🚀
    </h1>
);

root2.render(<Title/>)

const HeadingComponent = () => (
    <>
      <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
      <div id="container-2"></div>
    </>
  );
const root3 = ReactDOM.createRoot(document.getElementById('child'))
root3.render(<HeadingComponent/>);