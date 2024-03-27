import { useState } from "react";
import "./navbar.scss"
function Navbar() {
    const [open, SetOpen] = useState(false);
    return (

        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" width='100px' />
                    <span>RentEZ</span>

                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">

                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => SetOpen(prev => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;