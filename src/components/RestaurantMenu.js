import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
  resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card?.card || {};
    console.log(itemCards);


  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;










// import { useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// // import { MENU_API } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);

//   // Avoiding conditional rendering of hooks
//   const [showIndex, setShowIndex] = useState(null);

//   // If resInfo is still null, show shimmer loading
//   if (resInfo === null) return <Shimmer />;

//   // Destructure the restaurant info
//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards?.[2]?.card?.card?.info || {};

//   const { itemCards } =
//     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
//       ?.card || {};

//   const categories =
//     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
//     );

//   const categories2 =
//     resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (cardC) =>
//         cardC.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );

//   // Avoid having any conditionally placed hooks
//   return (
//     <div className="pt-[80px] mx-4 my-6 sm:mx-56 sm:my-9">
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-center font-palanquin font-bold text-3xl sm:text-4xl">{name}</h1>
//       </div>

//       <div className="flex justify-between items-center">
//         <h2 className="font-palanquin text-lg sm:text-xl font-semibold">{cuisines.join(', ')}</h2>
//         <p className="font-montserrat text-lg sm:text-xl">{costForTwoMessage}</p>
//       </div>

//       <div className="bg-transparent shadow-lg sm:my-3 sm:p-5 rounded-md">
//         {/* Ensure categories2 is always rendered, but only map through if present */}
//         {categories2 && categories2.map((category, index) => (
//           <RestaurantCategory
//             key={category?.card?.card?.title} 
//             data={category?.card?.card}
//             showItems={index === showIndex}  // Show items based on index match
//             setShowIndex={() => setShowIndex(index)}  // Update showIndex on click
//           />
//         ))}
//       </div>

//       {categories && categories.map((category, index) => (
//         <div key={category?.card?.card?.title} className="bg-transparent shadow-lg my-4 p-3 sm:my-10 sm:p-5 rounded-md">
//           <h4 className="font-palanquin font-bold text-xl sm:text-3xl">
//             {category?.card?.card?.title}
//           </h4>
//           {category?.card?.card?.categories?.map((subCategory) => (
//             <RestaurantCategory key={subCategory.title} data={subCategory} />
//           ))}
//         </div>
//       ))}

//       {/* Uncomment for item cards (optional) */}
//       {/* <ul>
//         {(itemCards || []).map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - {" Rs. "}
//             {item.card.info.price / 100}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default RestaurantMenu;



// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// // import { MENU_API } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   const { resId } = useParams();

//   const resInfo = useRestaurantMenu(resId);
//   const [showIndex, setShowIndex] = useState(null); // State to track the expanded category index

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards?.[2]?.card?.card?.info || {};

//   const categories =
//     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
//     );

//   return (
//     <div className="pt-[80px] mx-4 my-6 sm:mx-56 sm:my-9">
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-center font-palanquin font-bold text-3xl sm:text-4xl">{name}</h1>
//       </div>

//       <div className="flex justify-between items-center">
//         <h2 className="font-palanquin text-lg sm:text-xl font-semibold">{cuisines.join(', ')}</h2>
//         <p className="font-montserrat text-lg sm:text-xl">{costForTwoMessage}</p>
//       </div>

//       <div className="bg-transparent shadow-lg sm:my-3 sm:p-5 rounded-md">
//         {categories.map((category, index) => (
//           <RestaurantCategory
//             key={category?.card?.card?.title}
//             data={category.card.card}
//             showItems={showIndex === index} // Show items for the category that matches showIndex
//             setShowIndex={() => setShowIndex(index)} // Update showIndex when a category is clicked
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;










// You don't strictly need || {} if:

// You are okay with the destructured values being undefined (and you handle that later).
// You are confident that the path to resInfo?.cards?.[2]?.card?.card?.info will always exist when the component renders.
// However, using || {} adds an extra layer of safety in case the path to info is undefined, and it ensures your destructuring doesn't break, especially if you're uncertain whether the data will always be available immediately (e.g., in an asynchronous data-fetching scenario).

{
  /* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */
}




// <div className="menu text-center">
//       {/* <h1>Name of the Restaurant</h1>
//             <h2>Menu</h2>
//             <ul>
//                 <li>Biryani</li>
//                 <li>Burgers</li>
//                 <li>Diet Coke</li>

//             </ul> */}
//       {/* <h1>{ restaurant.name} </h1> */}
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       {/* <h2>{costForTwoMessage}</h2> */}
//       {/* <h3>Cuisines: {cuisines?.join(", ")}</h3> */}

//       <p className="font-bold text-lg">
//         {cuisines?.join(", ") || "No cuisines available"} - {costForTwoMessage}
//       </p>


// import { useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// // import { MENU_API } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   // const [resInfo, setResInfo] = useState(null);

//   //   const params = useParams();
//   //   console.log(params);

//   const { resId } = useParams();

//   const resInfo = useRestaurantMenu(resId);

//   /*
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(MENU_API +resId);
//     // +"&catalog_qa=undefined&submitAction=ENTER"
//     const json = await data.json();

//     // console.log(json);
//     setResInfo(json.data);
//   };
//   */

//   // If resInfo is still null, show shimmer loading
//   if (resInfo === null) return <Shimmer />;

//   // const restaurant = resInfo?.cards?.[2]?.card?.card?.info;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards?.[2]?.card?.card?.info || {};

//   const { itemCards } =
//     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
//       ?.card || {};

//   const categories =
//     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
//     );

//   const categories2 =
//     resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (cardC) =>
//         cardC.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   // console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//   console.log(categories);

//   // Added state for showIndex, always called at the top level
//   const [showIndex, setShowIndex] = useState(null);

//   return (
//     <div className="pt-[80px] mx-4 my-6 sm:mx-56 sm:my-9">
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-center font-palanquin font-bold text-3xl sm:text-4xl">{name}</h1>
//       </div>

//       <div className="flex justify-between items-center">
//         <h2 className="font-palanquin text-lg sm:text-xl font-semibold">{cuisines.join(', ')}</h2>
//         <p className="font-montserrat text-lg sm:text-xl">{costForTwoMessage}</p>
//       </div>

//       <div className="bg-transparent shadow-lg sm:my-3 sm:p-5 rounded-md">
//         {/* Ensure categories2 is always rendered, but only map through if present */}
//         {categories2 && categories2.map((category, index) => (
//           <RestaurantCategory
//             key={category?.card?.card?.title} 
//             data={category?.card?.card}
//             showItems={index === showIndex}  // Show items based on index match
//             setShowIndex={() => setShowIndex(index)}  // Update showIndex on click
//           />
//         ))}
//       </div>

//       {categories && categories.map((category, index) => (
//         <div key={category?.card?.card?.title} className="bg-transparent shadow-lg my-4 p-3 sm:my-10 sm:p-5 rounded-md">
//           <h4 className="font-palanquin font-bold text-xl sm:text-3xl">
//             {category?.card?.card?.title}
//           </h4>
//           {category?.card?.card?.categories?.map((subCategory) => (
//             <RestaurantCategory key={subCategory.title} data={subCategory} />
//           ))}
//         </div>
//       ))}

//       {/* <ul>
//         {(itemCards || []).map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - {" Rs. "}
//             {item.card.info.price / 100}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default RestaurantMenu;
