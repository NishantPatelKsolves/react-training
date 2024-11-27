import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAdvice } from './features/advice/adviceSlice';
function App() {
  const {advice} = useSelector((state)=>state.advice);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAdvice());
    setCount(c=>c+1);
  },[dispatch]);



  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    dispatch(fetchAdvice());
    setCount(c=>c+1);
  }


  return (
    <>
      <div>
        <h2>Random Advice</h2>
        <p>&quot;{advice}&quot;</p>
        <button onClick={handleClick}>Get new advice</button>
        <p>This is {count} advice</p>
      </div>
      
    </>
  )
}

export default App
