import {Link} from "react-router-dom"
import './NavBar.css'

function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser" style={{ textDecoration: 'none' }}>About</Link>
            </div>
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser/search" style={{ textDecoration: 'none' }}>Ticker Search</Link>
            </div>
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser/home" style={{ textDecoration: 'none' }}>Your Portfolio</Link>
            </div>
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser/news" style={{ textDecoration: 'none' }}>News</Link>
            </div>
            <div className="linkContainer">
                <Link to="/react-stock-api-visualiser/companyInfo" style={{ textDecoration: 'none' }}>Company Info</Link>
            </div>
        </div>
    )
}

export default Navbar;