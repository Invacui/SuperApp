import React from "react";
import "./Cards.css";
export const Cards = ({cardData , OnSelect}) =>{
    const handleClick = () => {
        OnSelect(cardData.title);
    }
    return(
        <div className="card" onClick={handleClick}>    
           <img src={cardData.image} alt={cardData.title} />
           <h2>{cardData.title}</h2>
        </div>

);}
export default Cards;