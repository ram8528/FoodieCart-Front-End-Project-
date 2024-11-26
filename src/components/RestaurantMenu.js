import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  //   const params = useParams();
  //   console.log(params);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  /*
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API +resId);
    // +"&catalog_qa=undefined&submitAction=ENTER"
    const json = await data.json();

    // console.log(json);
    setResInfo(json.data);
  };
*/

  if (resInfo === null) return <Shimmer />;

  // const restaurant = resInfo?.cards?.[2]?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
      ?.card || {};

  const categories =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  console.log(categories);

  return (
    <div className="menu text-center">
      {/* <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>

            </ul> */}
      {/* <h1>{ restaurant.name} </h1> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* <h2>{costForTwoMessage}</h2> */}
      {/* <h3>Cuisines: {cuisines?.join(", ")}</h3> */}

      <p className="font-bold text-lg">
        {cuisines?.join(", ") || "No cuisines available"} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}

      {/* <ul>

        {(itemCards || []).map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

// You don't strictly need || {} if:

// You are okay with the destructured values being undefined (and you handle that later).
// You are confident that the path to resInfo?.cards?.[2]?.card?.card?.info will always exist when the component renders.
// However, using || {} adds an extra layer of safety in case the path to info is undefined, and it ensures your destructuring doesn't break, especially if you're uncertain whether the data will always be available immediately (e.g., in an asynchronous data-fetching scenario).

{
  /* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */
}
