import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CardItem = ({ item, itemIndex }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="flex items-center justify-between p-2 md:p-5 border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[180px]">
          <img src={item.image} className="w-full h-full object-cover" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className="bg-red-200 hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3 group"
              onClick={removeFromCart}
            >
              <MdDelete fill="#991b1b" className=" group-hover:fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
