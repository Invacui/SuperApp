import React, { useEffect } from 'react';

const CardsSelections = ({ selectedCards, setSelectedCards }) => {
  const handleremove = (index) => {
    // Create a copy of the selectedCards array
    const updatedSelectedCards = [...selectedCards];
    
    // Remove the card at the specified index
    updatedSelectedCards.splice(index, 1);

    // Update the state with the modified array
    setSelectedCards(updatedSelectedCards);

    // Update localStorage with the modified array
    localStorage.setItem("Selections", JSON.stringify(updatedSelectedCards));
  };

  return (
    <div className="selected-cards">
      <h3>Selected Cards</h3>
      <div className="totalSCards">
        {selectedCards.map((title, index) => (
          <div className="SCard" key={index}>
            <span id='SCardp'>{title}</span>
            &emsp;&emsp;
            <span
              id='SCardsp'
              onClick={() => handleremove(index)} // Pass the index to handleremove
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsSelections;
