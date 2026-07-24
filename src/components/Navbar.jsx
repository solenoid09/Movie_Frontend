import { Link } from "react-router-dom";
import '../css/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/home" className="nav-links">Home</Link>
            <Link to="/favourites" className="nav-links">Favourites</Link>
        </div>  
    </nav>
    )
    }

    export default Navbar;  