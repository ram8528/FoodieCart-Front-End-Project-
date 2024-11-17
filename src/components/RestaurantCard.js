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
    return(
        <div className="res-card" style={styleCard}>
            {/* <img className="res-logo" src= { CDN_URL + resData.info.cloudinaryImageId } alt={"image"} /> */}
            <img className="res-logo" src= { CDN_URL + cloudinaryImageId } alt={"image"} />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo }</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    );
};

export default RestaurantCard;