import {Link} from'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> |
        <Link to="/other">Other</Link> |
    </nav>
  )
}

export default Navbar
