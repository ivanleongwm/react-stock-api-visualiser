import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/react-stock-api-visualiser">Main Page</Link>
                </li>
                <li>
                    <Link to="/react-stock-api-visualiser/home">Home Page</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;