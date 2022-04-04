import React, { useState } from "react"

function App() {
  const[time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  React.useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return() => clearInterval(interval)
  }, [timerOn])

  return (
    <div className="App">
     <div>
       <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
       <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
       <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
     </div>
     <div id='buttons'>
       {!timerOn && time === 0 && (
         <button onClick={() => setTimerOn(true)}>Start</button>
       )}
       {timerOn && (
         <button onClick={() => setTimerOn(false)}>Stop</button>
       )}
        {!timerOn && time > 0 && (
         <button onClick={() => setTimerOn(true)}>Resume</button>
       )}
       {!timerOn && time > 0 && (
         <button onClick={() => setTime(0)}>Reset</button>
       )}
     </div>
    </div>
  );
};

export default App;
