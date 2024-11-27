import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.categories?.length})
          </span>
          <span>⬇️</span>
        </div>
        {data?.categories?.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold my-3">{category.title}</h3>{" "}
            {/* Display the subcategory title */}
            {/* Render ItemList component with itemCards only if showItems is true */}
            {showItems && <ItemList items={category.itemCards} dummy={dummy} />}{" "}
            {/* Render ItemList component with itemCards */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;

// {showItems && <ItemList items={data.itemCards} dummy={dummy} />}



// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   // console.log(data); // Debugging the incoming data

//   // Destructure the title and categories from the data
//   const { title, categories } = data || {};

//   // Handle category click to show/hide items
//   const handleClick = () => {
//     setShowIndex(); // Update showIndex to the current category
//   };

//   return (
//     <div>
//       <div className="w-6/12 mx-auto my-4 bg-gray-400 shadow-lg p-4">
//         <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//           <span className="font-bold text-lg">
//             {title} ({categories?.length}) {/* Display the title and the number of categories */}
//           </span>
//           <span>⬇️</span> {/* This represents a down arrow */}
//         </div>

//         {/*
//           This section will map through each category and render the items inside.
//           The items will only show if showItems is true, which comes from the parent component (RestaurantMenu)
//         */}
//         {categories?.map((category, index) => (
//           <div key={index}>
//             <h3 className="text-xl font-bold my-3">{category.title}</h3> {/* Display the subcategory title */}

//             {/* Render ItemList component with itemCards only if showItems is true */}
//             {showItems && <ItemList items={category.itemCards} />} {/* Render ItemList component with itemCards */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;
