import React, { useState } from "react";

const Card = ({ item, setCardCount }) => {
  const [status, setStatus] = useState(true);

  const cardAdd = () => {
    setStatus(false);
    setCardCount((val) => val + 1);
  };

  const cardRemove = () => {
    setStatus(true);
    setCardCount((val) => val - 1);
  };
  return (
    <div>
      <div key={item.id}>
        {item.name} : {item.price}
        {status ? (
          <button onClick={cardAdd}>Add</button>
        ) : (
          <button onClick={cardRemove}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default Card;
