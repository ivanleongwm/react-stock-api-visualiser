import {Link} from "react-router-dom"
import './NavBar.css'

function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser">Main Page</Link>
            </div>
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser/home">Your Portfolio</Link>
            </div>
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser/news">News</Link>
            </div>
        </div>
    )
}

export default Navbar;