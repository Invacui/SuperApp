import React, { useState, useEffect } from "react";
import News_Card from "./api-cards/News_Card";
import Time_Card from "./api-cards/Time_Card";
import Timer from "./api-cards/Timer";
import { useNavigate } from "react-router-dom";
const Pagethree = () => {
  const navigate = useNavigate();
  function handleSubmit (){
    navigate('/browse');
  }
  return (
    
    <div className="pg3mbody">
   <div class="pg3box">
     <Time_Card/>
     <Timer />
   </div>
   <News_Card/>
   <button id="page4jumper" onClick={handleSubmit}>Browse</button>
    </div>
  );
};

export default Pagethree;
