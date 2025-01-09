import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/restaurants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  //   const [listOfRestaurants, setListOfRestaurants] = useState(resList); // it used when we have data with us
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // if we want to fetch data by API call we must leave it empty
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false); // Track if top-rated restaurants are being shown

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variable updates, react triggers a reconcilliation cycle(re-render)
  // console.log("Body rendered", listOfRestaurants);

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
      // "https://console.firebase.google.com/project/foodiecart-af11f/database/foodiecart-af11f-default-rtdb/data/~2F"
    );

    const json = await data.json();
    // console.log(json);
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus(); // for checking onlinestatus
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline please check your Internet Connection</h1>
    );

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return (
  //   <div className="spinner-container">
  //     <div className="spinner">Loading</div>
  //   </div>
  //   <Shimmer />
  //   );
  // }

  //   console.log("Body Rendered");// Firstly Body renders then useEffect is called

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search m-4 p-4 flex justify-between h-auto min-h-[200px]">
        <div className="m-4 p-4 flex items-center h-10">
          <input
            type="text"
            data-testid = "searchInput"
            placeholder="Search.."
            className="search-input border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-1 py-1 bg-green-300 m-1 rounded-lg"
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) // here we have used join because it is an array of strings
              );
              // The .join() method is an array method in JavaScript that combines all elements of an array into a single string. You can specify a separator (like a space, comma, or any other character) that will be inserted between each array element.

              // setListOfRestaurants(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            🔍Search
          </button>
        </div>
        
        <div className="search m-4 p-4 flex items-center">
          <label className="font-bold p-2">UserName : </label>
          <input
            className="border border-red-600 bg-green-300 p-2 rounded-lg text-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Place UserName"
          />
        </div>

        <div className="m-4 p-4 flex items-center justify-between h-10 ">
          <button
            className="flex px-5 py-2 m-2 bg-gray-400 rounded-lg items-center"
            onClick={() => {
              // console.log("Button Clicked")
              // restaurants = restaurants.filter(
              //     (res) => res.info.avgRating >4
              // );
              // console.log(restaurants);

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurants(filteredList);
              setShowTopRated(true); // Indicate top-rated list is being shown
            }}
          >
            Top Rated Restaurants
          </button>

          {showTopRated && (
            <button
              className="px-5 py-2 m-2 bg-red-300 rounded-lg items-center"
              onClick={() => {
                setListOfRestaurants(resList); // Reset to the original full list
                setShowTopRated(false); // Reset top-rated filter
              }}
            >
              Back to All Restaurant List
            </button>
          )}

          
        </div>
      </div>
      <div className="res-container flex flex-wrap px-20">
        {/* {listOfRestaurants.map((restaurant) => ( */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="w-64 h-[350px] p-4 bg-white rounded-lg shadow-lg"
          >
            {/* <RestaurantCard key={restaurant.info.id} resData={restaurant} /> */}

            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

{
  /* <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo }</h4>
            <h4>{resData.info.deliveryTime} minutes</h4> */
}

// not using keys(not acceptable) <<  index as keys << unique key(best practice always)

{
  /* <RestaurantCard resData = {restaurants[0]}/>
                <RestaurantCard resData = {restaurants[1]}/>
                <RestaurantCard resData = {restaurants[2]}/>
                <RestaurantCard resData = {restaurants[3]}/>
                <RestaurantCard resData = {restaurants[4]}/>
                <RestaurantCard resData = {restaurants[5]}/>
                <RestaurantCard resData = {restaurants[6]}/> */
}
