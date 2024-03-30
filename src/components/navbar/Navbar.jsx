import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
function Navbar() {
    const [open, SetOpen] = useState(false);
    return (

        <nav>
            <div className="left">
                <Link to={`/`} className="link logo">
                    <img src="/logo.png" alt="" width='100px' />
                    <span>RentEZ</span> </Link>
                <Link to={`/`} className="link">Home</Link>
                <Link to={`/`} className="link">Contact</Link>
                <Link to={`/`} className="link">About</Link>
                <Link to={`/`} className="link">Agents</Link>


            </div>
            <div className="right">

                <Link to={`/`} className="link">Sign in</Link>
                <Link to={`/`} className="link register">Sign up</Link>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => SetOpen(prev => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to={`/`} className="link">Home</Link>
                    <Link to={`/`} className="link">Contact</Link>
                    <Link to={`/`} className="link">About</Link>
                    <Link to={`/`} className="link">Agents</Link>
                    <Link to={`/`} className="link">Sign in</Link>
                    <Link to={`/`} className="link">Sign up</Link>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;