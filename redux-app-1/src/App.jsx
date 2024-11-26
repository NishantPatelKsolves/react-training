import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const handleInc=()=>{
    dispatch(increment());
  }
  const handleDec=()=>{
    dispatch(decrement());
  }
  const handleReset=()=>{
    dispatch(reset());
  }
  const handleIncByAmount=()=>{
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <div>
      <button onClick={handleInc}>+</button>
      <p>Count : {count}</p>
      <button onClick={handleDec}>-</button>
      <br/>
      <br/>
      <button onClick={handleReset}>Reset</button>
      <br/>
      <br/>
      <input type="number" name="reset" id="reset" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
      <br />
      <br />
      <button onClick={handleIncByAmount}>IncByAmount</button>

      </div>
      
    </>
  )
}

export default App
