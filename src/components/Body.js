import RestaurantCard from "./RestaurantCard";
import resList from "../utils/restaurants"
import { useState } from "react";


const Body = () => {
    // Local State Variable - Super powerful variable
     const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="Search">
            <input type="text" placeholder="Search.." className="search-input" />
            <button className="search-button">🔍</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // console.log("Button Clicked")
                    // restaurants = restaurants.filter(
                    //     (res) => res.info.avgRating >4
                    // );
                    // console.log(restaurants);

                    const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >4.5
                        );
                    setListOfRestaurants(filteredList);

                    }}
                    >
                        Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                ))

                }

            </div>
        </div>
    );
};

export default Body;


{/* <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo }</h4>
            <h4>{resData.info.deliveryTime} minutes</h4> */}


// not using keys(not acceptable) <<  index as keys << unique key(best practice always)



{/* <RestaurantCard resData = {restaurants[0]}/>
                <RestaurantCard resData = {restaurants[1]}/>
                <RestaurantCard resData = {restaurants[2]}/>
                <RestaurantCard resData = {restaurants[3]}/>
                <RestaurantCard resData = {restaurants[4]}/>
                <RestaurantCard resData = {restaurants[5]}/>
                <RestaurantCard resData = {restaurants[6]}/> */}