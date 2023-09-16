import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
            <Link to='/'><img src={"logo.png"} className="logo" /></Link>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/search'>Search</Link> </li>
                <li><Link to='/about'>About</Link> </li>
                <li><Link to='/contact'>Contact</Link> </li>
            </ul>
        </div>
    )
}

export default NavBar