import { createContext } from 'react'
import './App.css'
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
export const DataContext = createContext();

function App() {
  const data = { name: "John", age: 25, city: "New York" };
  const data2 = { name: "Jacob", age: 26, city: "Florida" };

  return (
    <>
    {/* without hook */}
    <DataContext.Provider value={data} >
      <Comp1 />
    </DataContext.Provider>
    {/* with hook */}
    <DataContext.Provider value={data2} >
      <Comp2/>
    </DataContext.Provider>
    </>
  )
}

export default App
