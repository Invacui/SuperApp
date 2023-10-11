import React, { useState, useEffect } from "react";
import Cardlist from "./CardsAndSelections/CardsList";
import SelectedCards from "./CardsAndSelections/CardsSelections";
import waricn from "../../Drawables/warn.svg";
import data from "./choices";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const handleCardSelect = (cardData) => {
    const dummyset = new Set(selectedCards); //Make a dummyset
    dummyset.add(cardData); //Update the dummy set to eliminate dups
    setSelectedCards(dummyset);
    console.log(Array.from(selectedCards));
  };

  useEffect(() => {
    localStorage.setItem("Selections", JSON.stringify([...selectedCards])); //setItem in localStorage
  }, [selectedCards]);

  function handlepagebutton() {
    const selectedCategories =
      JSON.parse(localStorage.getItem("Selections")) || [];
      
    console.log(`cat => ${selectedCategories}`);
  
    if (selectedCategories.length < 3) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      navigate("/page3");
    }
  }
  

  return (
    <div class="mainpagetwo">
      <div className="userbox">
        <div className="leftbox">
          <h1 id="logo">Super App</h1>
          <div class="desc1">
            <p id="Catdesc">Choose your entertainment category</p>
          </div>
          <div id="selectedCards">
            <SelectedCards
              selectedCards={Array.from(selectedCards)}
              setSelectedCards={setSelectedCards}
            />
          </div>
          {/* Render the SelectedCards component */}
          {showWarning && (
            <div class="warbox1">
              <p>
                <img src={waricn} alt="waricn" /> Minimum 3 category required
              </p>
            </div>
          )}
        </div>
        <div class="rightbox">
          <div>
            <Cardlist cards={data} OnSelect={handleCardSelect} />
          </div>
          <div id="page_3">
            <button id="page_3_nxt" onClick={handlepagebutton}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
