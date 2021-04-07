import React, { useState } from "react";
import Paused from "./Paused";
import {minutesToDuration, secondsToDuration} from "../utils/duration";

function Session({timer, focusDuration, playCounter, ariaNow, timerMode, breakDuration, isTimerRunning}){
  if ( playCounter > 0) {
    return (    
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{timerMode} for {secondsToDuration(timerMode === "Focusing" ? focusDuration*60 : breakDuration*60)} minutes</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(timer)} remaining
            </p>
          </div>
        </div>
        <Paused playCounter={playCounter} isTimerRunning={isTimerRunning} />
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaNow} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${ariaNow}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
      );
  } else {
    return (
      <div>

      </div>
    );
  }

}
export default Session;
