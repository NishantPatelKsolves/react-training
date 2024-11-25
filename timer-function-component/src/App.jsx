import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = ()=>{
    const id = setInterval(()=>setTime(p=>p+1),1000);
    setIntervalId(id)
  }
  const pauseTimer = ()=>{
    clearInterval(intervalId);
    setIntervalId(null);
  }
  const resetTimer = ()=>{
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  }

  useEffect(()=>{
  return ()=>clearInterval(intervalId);
  },
  [])


  return (
    <>
      <h4>Hello Timer</h4>
      <p>{time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default App
