import {Link} from'react-router-dom'
import {useContext} from 'react'
import { Theme } from '../App'
const Navbar = () => {
  const {theme, themeToggle} = useContext(Theme);
  return (
    <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> |
        <Link to="/other">Other</Link> |
        <button onClick={themeToggle } style={{ marginLeft: '1rem' }}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    </nav>
  )
}

export default Navbar
