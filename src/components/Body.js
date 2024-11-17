import RestaurantCard from "./RestaurantCard";
import resList from "../utils/restaurants";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
//   const [listOfRestaurants, setListOfRestaurants] = useState(resList); // it used when we have data with us
const [listOfRestaurants, setListOfRestaurants] = useState([]); // if we want to fetch data by API call we must leave it empty
  const [showTopRated, setShowTopRated] = useState(false); // Track if top-rated restaurants are being shown

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
    );

    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listOfRestaurants.length === 0) {
    return (
    //   <div className="spinner-container">
    //     <div className="spinner">Loading</div>
    //   </div>
    <Shimmer />
    );
  }



//   console.log("Body Rendered");// Firstly Body renders then useEffect is called
  return (
    <div className="body">
      <div className="Search">
        <input type="text" placeholder="Search.." className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
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
            className="back-to-all-btn"
            onClick={() => {
              setListOfRestaurants(resList); // Reset to the original full list
              setShowTopRated(false); // Reset top-rated filter
            }}
          >
            Back to All Restaurant List
          </button>
        )}
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
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
