import { useState, createContext } from 'react'
import './App.css'
import User from './User';
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = ()=>{
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <User/>
    </ThemeContext.Provider>
  )
}

export default App
