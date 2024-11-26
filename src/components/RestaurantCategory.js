import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data);
  const { title, categories } = data || {};
  const[showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems)
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-400 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({categories?.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* <ItemList items={data.categories} /> */}

        {categories?.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold my-3">{category.title}</h3>

            {/* Pass itemCards from the category to ItemList */}
            {showItems && <ItemList items={category.itemCards} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
