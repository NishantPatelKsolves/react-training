import { useContext } from 'react';
import {ThemeContext} from './App'

const User = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme} className={theme}>Toggle Theme</button>
      <p>Currentr Theme: {theme}</p>
    </div>
  )
}

export default User
