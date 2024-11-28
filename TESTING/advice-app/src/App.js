import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString())


  const getAdvice = async ()=>{
    const advice = await fetch('https://api.adviceslip.com/advice');
    const data = await advice.json()
    console.log('Advice:', advice)
    console.log('Data', data)
    console.log('Data', data.slip.advice)
    setAdvice(data.slip.advice);
    setCount(c=>c+1);
  }

  useEffect(()=>{getAdvice()},[]);
  useEffect(()=>{setInterval(()=>{setTime(new Date().toLocaleTimeString())},1000)},[])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {advice}
        </p>
        <button onClick={getAdvice}>Get advice</button>
        <p>Count {count}</p>
        <p>Timer: {time}</p>
      </header>
    </div>
  );
}

export default App;
