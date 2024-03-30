import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
function Navbar() {
    const [open, SetOpen] = useState(false);
    return (

        <nav>
            <div className="left">
                <Link to={`/`}>                    <img src="/logo.png" alt="" width='100px' />
                    <span>RentEZ</span> </Link>
                <Link to={`/`}>Home</Link>
                <Link to={`/`}>Contact</Link>
                <Link to={`/`}>About</Link>
                <Link to={`/`}>Agents</Link>


            </div>
            <div className="right">

                <Link to={`/`}>Sign in</Link>
                <Link to={`/`} className="register">Sign up</Link>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => SetOpen(prev => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to={`/`}>Home</Link>
                    <Link to={`/`}>Contact</Link>
                    <Link to={`/`}>About</Link>
                    <Link to={`/`}>Agents</Link>
                    <Link to={`/`}>Sign in</Link>
                    <Link to={`/`}>Sign up</Link>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;