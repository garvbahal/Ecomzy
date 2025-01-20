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
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
