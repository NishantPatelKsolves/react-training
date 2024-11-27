import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [all, setAll] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  
  const handleSelectAll = (e)=>{
    console.log('Checked:',e.target.checked)
    setAll(e.target.checked);
    const a = e.target.checked;
    setOne(a);
    setTwo(a);
    setThree(a);
    setFour(a);
    setFive(a);
    
  }

  useEffect(()=>{
    function handleEffect(){
      const childChecked = one && two && three && four && five;
      setAll(childChecked);
    }
    handleEffect();
  },[one, two, three, four, five])

  return (
    <>
      <div>
        <label htmlFor="all">Select All</label>
        <input type='checkbox' name='all' checked={all} onChange={handleSelectAll}/>
        <br />
        <br />
        <label htmlFor="all">Select One</label>
        <input type='checkbox' name='one' checked={one} onChange={(e)=>setOne(e.target.checked)}/>
        <br />
        <label htmlFor="all">Select Two</label>
        <input type='checkbox' name='two' checked={two} onChange={(e)=>setTwo(e.target.checked)}/>
        <br />
        <label htmlFor="all">Select Three</label>
        <input type='checkbox' name='three' checked={three} onChange={(e)=>setThree(e.target.checked)}/>
        <br />
        <label htmlFor="all">Select Four</label>
        <input type='checkbox' name='four' checked={four} onChange={(e)=>setFour(e.target.checked)}/>
        <br />
        <label htmlFor="all">Select Five</label>
        <input type='checkbox' name='five' checked={five} onChange={(e)=>setFive(e.target.checked)}/>

      </div>
      
    </>
  )
}

export default App
