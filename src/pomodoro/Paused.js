import React from "react";
 
function Paused({isTimerRunning, playCounter}){

return (
    !isTimerRunning && playCounter > 0 ? <h2>Paused</h2> : <div></div>
 );
}
export default Paused;