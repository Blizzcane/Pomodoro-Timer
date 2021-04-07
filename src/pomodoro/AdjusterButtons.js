import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import {secondsToDuration, minutesToDuration} from "../utils/duration";

function AdjusterButtons ({timeAdjuster, focusDuration, breakDuration, disabled}){
    return (<div className="row">
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={timeAdjuster}
            id="decrease-focus"
            disabled={!disabled}
          >
            <span className="oi oi-minus" id="decrease-focus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={timeAdjuster}
            id="increase-focus"
            disabled={!disabled}
          >
            <span className="oi oi-plus" id="increase-focus" />
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: Update this text to display the current break session duration */}
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              id="decrease-break"
              disabled={!disabled}
              onClick={timeAdjuster}
            >
              <span className="oi oi-minus" id="decrease-break" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              id="increase-break"
              disabled={!disabled}
              onClick={timeAdjuster}
            >
              <span className="oi oi-plus" id="increase-break"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default AdjusterButtons;
