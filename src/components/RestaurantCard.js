import { CDN_URL } from "../utils/constants";
import { styleCard } from "../App.js";

const RestaurantCard = (props) => {
    // const {resName, cuisine, star, time, img} = props; //1924-1925
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
    } = resData?.info;
    const {
        deliveryTime
    } = resData?.info.sla;

    return (
        <div className="res-card m-4 p-4 w-[220px] h-[350px] bg-white rounded-lg shadow-lg"> {/* Reduced width to make the card less bulky */}
            {/* <img className="res-logo" src= { CDN_URL + resData.info.cloudinaryImageId } alt={"image"} /> */}
            <img 
                className="res-logo w-full h-32 object-cover rounded-t-lg" 
                src={CDN_URL + cloudinaryImageId} 
                alt={"image"} 
            />
            <div className="p-2">
                <h3 className="text-lg font-semibold truncate">{name}</h3> {/* Truncated name to prevent overflow */}
                <h4 className="text-sm text-gray-500">{cuisines.join(", ")}</h4> {/* Smaller text for cuisines */}
                <div className="flex justify-between items-center mt-2 text-sm">
                    <h4 className="font-semibold">{avgRating}</h4>
                    <h4 className="text-gray-500">₹{costForTwo}</h4>
                </div>
                <h4 className="text-sm text-gray-500">{deliveryTime} minutes</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;
