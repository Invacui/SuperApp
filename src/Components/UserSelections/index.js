import React, { useState, useEffect } from "react";
import Cardlist from "./CardsAndSelections/CardsList";
import SelectedCards from "./CardsAndSelections/CardsSelections";
import waricn from "../../Drawables/warn.svg";
import data from "./choices.json";

const Index = () => {
  const [selectedCards, setSelectedCards] = useState(new Set());
  const handleCardSelect = (cardData) => {
    const dummyset = new Set(selectedCards); //Make a dummyset
    dummyset.add(cardData); //Update the dummy set to eliminate dups
    setSelectedCards(dummyset);
    console.log(Array.from(selectedCards));
  };

  useEffect(() => {
    localStorage.setItem("Selections", JSON.stringify([...selectedCards])); //setItem in localStorage
  }, [selectedCards]);

  return (
    <div class="mainpagetwo">
      <div className="userbox">
        <div className="leftbox">
          <h1 id="logo">Super App</h1>
          <div class="desc1">
            <p id="Catdesc">Choose your entertainment category</p>
          </div>
          <div id="selectedCards">
            <SelectedCards selectedCards={Array.from(selectedCards)} setSelectedCards={setSelectedCards} />
          </div>
          {/* Render the SelectedCards component */}
          <div class="warbox1">
            <p>
              <img src={waricn} alt="waricn" /> Minimum 3 category required
            </p>
          </div>
        </div>
        <div class="rightbox">
          <Cardlist cards={data} OnSelect={handleCardSelect} />
        </div>
      </div>
    </div>
  );
};

export default Index;
