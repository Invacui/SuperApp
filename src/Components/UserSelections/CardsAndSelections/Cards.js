import React from "react";
import "./Cards.css";
import imagePaths from "../../Misc/imagepath";
export const Cards = ({ cardData, OnSelect }) => {
  const handleClick = () => {
    OnSelect(cardData.title);
  };
  console.log(cardData.image);
  return (
    <div class="cardbody">
      <div
        className="card"
        onClick={handleClick}
        style={{ backgroundColor: cardData.backgroundColor }}
      >
        <div className="cdbox" id="cd1">
          <h2>{cardData.title}</h2>
        </div>
        <div className="cdbox" id="cd2">
          <img src={cardData.image} alt={cardData.title} />
        </div>
      </div>
    </div>
  );
};
export default Cards;
