import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [advice, setAdvice] = useState('')

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(p=>p+1);
    console.log(data)
  }

  useEffect(()=>{getAdvice()},[]);

  return (
    <>
      <p>Hello</p>
      <p>Advice : {advice}</p>
      <button onClick={getAdvice}>New advice</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
