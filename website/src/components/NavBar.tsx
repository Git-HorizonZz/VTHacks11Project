import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="custom-navbar">
            <Link to='/'><img src={"logo.png"} className="logo" /></Link>
            <ul>
                <li><Link to='/' style={{ fontWeight: 'bold' }}>Home</Link> </li>
                <li><Link to='/search' style={{ fontWeight: 'bold' }}>Search</Link> </li>
                <li><Link to='/profile' style={{ fontWeight: 'bold' }}>Profile</Link> </li>
                <li><Link to='/contact' style={{ fontWeight: 'bold' }}>Contact</Link> </li>
            </ul>
        </div>
    )
}

export default NavBar