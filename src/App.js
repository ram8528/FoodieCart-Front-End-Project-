import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

export const styleCard = {
    backgroundColor: "#f0f0f0",
};

const AppLayout = () => {
  console.log(<Body/>); // This object is actually a Virtual DOM
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router= {appRouter}/>)



