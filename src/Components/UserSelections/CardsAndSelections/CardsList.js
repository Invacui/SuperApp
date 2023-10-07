import React from "react";
import Cards from "./Cards";
const CardsList = ({ cards, OnSelect }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Cards key={card.id} cardData={card} OnSelect={OnSelect} />
      ))}
    </div>
  );
};

export default CardsList;
