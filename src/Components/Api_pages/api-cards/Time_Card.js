import React, { useState, useEffect } from "react";
import Time_Item from "./Time_Item";

const Time_Card = () => {
  const apiKey = "f1575eae41a24ccbad641629231310";
  const location = "India"; // Replace with your desired location

  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data: ", error));
    }, 6000); // Update the weather data every 60 seconds

    return () => clearInterval(interval);
    }, [apiKey, location]);


    //Formatted Time and date ======================>

  useEffect(() =>{
  
  if (weatherData && weatherData.location) {
    const localTimeString = weatherData.location.localtime;

    // Create a Date object from the time string
    const localTime = new Date(localTimeString);

    // Format the time and date as before
    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12

    // Format the time string
     setTime (`${formattedHours}:${String(minutes).padStart(2,"0")} ${amPm}`);

    // Log the time
    console.log("Time:", time); //formatted time===================>

    // Format the date string (DD-MM-YYYY)
    const day = String(localTime.getDate()).padStart(2, "0");
    const month = String(localTime.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = localTime.getFullYear();

     setDate(`${day}-${month}-${year}`);
    // Log the date
    console.log("Date:", date);  //formatted time===================>
  }
  else{
    console.log("Date not present");
  }
    },[weatherData])


  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <Time_Item data={[weatherData ,date,time]} />
    </div>
  );
};

export default Time_Card;
