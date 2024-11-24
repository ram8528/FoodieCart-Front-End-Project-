import React , { lazy, Suspense }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
// const Body = lazy (() => import("./components/Body"));

export const styleCard = {
    backgroundColor: "#f0f0f0",
};

const AppLayout = () => {
  console.log(<Body/>); // This object is actually a Virtual DOM
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        // element: <Suspense fallback= {<h1>Loading....</h1>}> <Body /> </Suspense>,
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element:<Suspense fallback= {<h1>Loading....</h1>}><Grocery /></Suspense> ,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error />,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router= {appRouter} />)




