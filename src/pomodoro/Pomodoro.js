import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import {minutesToDuration, secondsToDuration} from "../utils/duration";
import AdjusterButtons from "./AdjusterButtons";
import Session from "./Session";
import PlayPause from "./PlayPause";


function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timer, setTimer] = useState(focusDuration*60);
  const [playCounter, setPlayCounter] = useState(0);
  const [ariaNow, setAriaNow] = useState(0); 
  const [timerMode, setTimerMode] = useState("Focusing");
  const [disabled, setDisabled] = useState(true);

  // const stopBtn = document.querySelector("#stopButton");
  // playCounter > 0 ? stopBtn.removeAttribute('disabled') : stopBtn.setAttribute('disabled', 'disabled');


  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      playCounter > 0 ? setDisabled(false) : setDisabled(true);

      if(timerMode === "Focusing" && timer === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        setTimerMode("On Break");
        setTimer(breakDuration*60);
        setAriaNow(0);
      } else if (timerMode === "On Break" && timer === 0){
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        setTimerMode("Focusing");
        setTimer(focusDuration*60);
        setAriaNow(0);
      };
      setAriaNow((value) => value + 100 / (timerMode === "Focusing" ? focusDuration*60 : breakDuration*60));      
      setTimer((time) => time - 1);
    },
    isTimerRunning ? 1000 : null
  );
  //used to disable buttons
   
  
  function playPause() {
    setPlayCounter((count) => count + 1);
    if (playCounter === 0) setTimer(focusDuration*60);
    setIsTimerRunning((prevState) => !prevState);
  }

  function stopButton() {
    setPlayCounter(0);
    setAriaNow(0); 
    setIsTimerRunning(false);
    setTimer(focusDuration*60);
    setDisabled(true);
  }
  //button handler to adjust the corresponding timers
  const timeAdjuster = ({target}) => {
    switch(target.id) {
      case "increase-focus":
        setFocusDuration((focus) => {
          if(focus + 5 > 60){
            return 60;
          } else {
            return focus + 5;
          }
        });
        break;
      case "decrease-focus":
        setFocusDuration((focus) => {
          if(focus - 5 < 5){
            return 5;
          } else {
            return focus - 5;
          }
        });
        break;
      case "increase-break":
        setBreakDuration((duration) => {
          if(duration + 1 > 15){
            return duration = 15;
          } else {
            return duration + 1;
          }
        });
        break;
      case "decrease-break":
        setBreakDuration((duration) => {
          if(duration - 1 < 1){
            return duration = 1;
          } else { 
            return duration - 1;
          }
        });
        break;
    }
  };

  return (
    <div className="pomodoro">
      <AdjusterButtons 
        timeAdjuster={timeAdjuster} 
        disabled={disabled}
        focusDuration={focusDuration} 
        breakDuration={breakDuration} />
      <PlayPause 
        playPause={playPause} 
        stopButton={stopButton} 
        isTimerRunning={isTimerRunning}
        disabled={disabled} />
      <Session 
        timer={timer} 
        timerMode={timerMode}
        isTimerRunning={isTimerRunning}
        focusDuration={focusDuration}
        breakDuration={breakDuration} 
        playCounter={playCounter} 
        ariaNow={ariaNow} />
    </div>
  );
}

export default Pomodoro;
