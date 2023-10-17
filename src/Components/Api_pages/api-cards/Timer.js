import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer1.css";

const Timer = () => {
  // State variables to store hours, minutes, seconds, and the running state
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to adjust the time (hours, minutes, or seconds)
  const adjustTime = (field, amount) => {
    if (field === "hours") {
      // Ensure that hours stay between 0 and 99
      setHours(Math.min(99, Math.max(0, hours + amount)));
    } else if (field === "minutes") {
      // Ensure that minutes stay between 0 and 59
      setMinutes(Math.min(59, Math.max(0, minutes + amount)));
    } else if (field === "seconds") {
      // Ensure that seconds stay between 0 and 59
      setSeconds(Math.min(59, Math.max(0, seconds + amount)));
    }
  };

  // Function to toggle the timer's running state (start or pause)
  const toggleTimer = () => {
    // Invert the running state when the button is clicked
    setIsRunning(!isRunning);
  };

  // Function to format time values as strings
  const formatTime = (time) => {
    return `${String(time).padStart(2, "0")}`;
  };

  // Calculate the total time in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return (
    <div className="timerboss">
      <div className="timerdial">
        <CountdownCircleTimer
          isPlaying={isRunning}
          duration={totalSeconds}
          colors={["#FF6A6A"]}
          rotation="counterclockwise"
          size={200}
          strokeWidth={7}
        >
          {({ remainingTime }) => (
            <div className="dialbox">
              <div>
                {formatTime(Math.floor(remainingTime / 3600))}:
                {formatTime(Math.floor((remainingTime % 3600) / 60))}:
                {formatTime(remainingTime % 60)}
              </div>
            </div>
          )}
        </CountdownCircleTimer>
      </div>
      <div class="timercontrolboss">
          <div class="timercontrol">
            <div class="timebox">
                <div className="timercontrolsub">
                  <div className="tcsTitle">Hours</div>
                  <div className="aup" onClick={() => adjustTime("hours", 1)}></div>
                  <div class="tcs">{formatTime(hours)} </div>
                  <div className="adn" onClick={() => adjustTime("hours", -1)}></div>
                </div>
                <div className="timercontrolsub delimeter">:</div>
                <div className="timercontrolsub">
                  <div className="tcsTitle">Minutes</div>
                  <div className="aup" onClick={() => adjustTime("minutes", 1)}></div>
                  <div class="tcs">{formatTime(minutes)} </div>
                  <div className="adn" onClick={() => adjustTime("minutes", -1)}></div>
                </div>
                <div className="timercontrolsub delimeter">:</div>
                <div className="timercontrolsub">
                  <div className="tcsTitle">Seconds</div>
                  <div className="aup" onClick={() => adjustTime("seconds", 1)}></div>
                  <div class="tcs">{formatTime(seconds)} </div>
                  <div className="adn" onClick={() => adjustTime("seconds", -1)}></div>
                </div>
                          </div>
            </div>
            <div className="tscbtn">
              <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
            </div>
      </div>
    </div>
  );
};

export default Timer;
