import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={()=>setCounter(p=>p-1)}>Decrement</button>
      <button onClick={()=>setCounter(p=>p+1)}>Increment</button>
    </div>
  )
}

export default Counter
