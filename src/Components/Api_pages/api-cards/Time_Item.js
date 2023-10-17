import React, { useState,useEffect } from "react";
import { imagePath, wicnpack } from "../../Misc/imagepath";
import mbar from "../../../Drawables/Weather.Icn/mbar.svg";
import wind from "../../../Drawables/Weather.Icn/wind.svg";
import humid from "../../../Drawables/Weather.Icn/humid.svg";
import "./api2.css";
const Time_Item = ({ data }) => {
  const [selections, setSelections] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const localStorageKey = 'Notes';
  const uname = localStorage.getItem("uname")
  const fname = localStorage.getItem("fname")
  const email = localStorage.getItem("email")

  useEffect(() => {
    // Fetch all selections from local storage
    const storedSelections = localStorage.getItem('Selections');

    // Parse the stored selections (assuming they are stored as an array)
    if (storedSelections !== null) {
      const parsedSelections = JSON.parse(storedSelections);
      setSelections(parsedSelections);
    }
  }, []);

  //Save to localStorage
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    localStorage.setItem(localStorageKey, newValue);
  };

  let i = 0;
  switch (data[0].current.condition.text) {
    case "Rainy":
      i = 1;
      break;
    case "Cloudy":
      i = 2;
      break;
    case "Mist":
      i = 3;
      break;
    case "Storm":
      i = 4;
      break;
    case "Snow":
      i = 5;
      break;
    default:
      i = 0; // Use a default icon for unknown conditions
      break;
  }
  return (
    <div class="box_bossbody3">
      <div className="box_body_page3">
      <div className="page3mainblock">
        <div class="userinfoblock">
          <div class="userinfosub" id="dp"></div>
          <div class="userinfosub" id="dp1">
            <div class="userinfoss" id="uis1">
            <div>{fname ? fname : 'Kevin Mitnick'}</div>
            <div>{email ? email : 'Kevin007@gmail.com'}</div>
            <div id="uiuname"> {uname ? uname : 'Kevin007'}</div> </div>
            <div class="userinfoss" id="uis2">
              {selections.map((selection, index) => (
              <div id = "uis2sel" key={index}>{selection}</div>
                      ))}
             </div>
          </div>
        </div>
        <div className="Time_main">
          <div className="tbox" id="tboxone">
            <span className="tsbox0">{data[1]}</span>
            <span className="tsbox0">{data[2]}</span>
          </div>
          <div className="tbox" id="tboxtwo">
            <div className="tsbox" id="tsone">
              <div class="tssbox tssone">
                <img src={wicnpack[i]} alt="" />
              </div>
              <div class="tssbox tssone1" id="tss1">
                {data[0].current.condition.text}
              </div>
            </div>
            <div className="tsline"></div>
            <div className="tsbox" id="tstwo">
              <div class="tssbox tssone" id="tss2">
                {data[0].current.temp_c}°C
              </div>
              <div class="tssbox tssone1" id="tss22">
                {<img id="svgf" src={mbar} alt="" />}
                {data[0].current.pressure_mb} mbar <br />
                Pressure
              </div>
            </div>
            <div className="tsline"> </div>
            <div className="tsbox" id="tsthree">
              <div class="tssbox tssone" id="tss3">
                {<img classname="svgf" src={wind} alt="" />}
                {data[0].current.wind_kph} kph Wind
              </div>
              <div class="tssbox tssone1" id="tss33">
                {<img classname="svgf" src={humid} alt="" />}
                {data[0].current.humidity}%<br />
                Humidity
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="notebox">
          <p for="myTextarea">All notes</p>
          <textarea id="notes" onChange={handleInputChange}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Time_Item;
