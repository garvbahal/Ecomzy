import React from "react";
import { MdDelete } from "react-icons/md";

const CardItem = ({ item, itemIndex }) => {
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
          <div>
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
