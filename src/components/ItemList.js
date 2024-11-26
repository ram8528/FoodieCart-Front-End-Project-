import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white p-4 mb-4 shadow-md border-cyan-500 border-b-2 flex flex-col sm:flex-row items-start"
        >
          {/* Item Details */}
          <div className="flex-1 pr-4">
            <div className="py-2 text-left font-bold text-black">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs text-start text-red-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Image and Button */}
          <div className="w-full sm:w-40 p-4 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-auto object-cover rounded-lg" // Fixed width, auto height
              alt={item.card.info.name}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="p-2 rounded-lg bg-white shadow-lg border-red-500 hover:bg-cyan-300 transition-all">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
