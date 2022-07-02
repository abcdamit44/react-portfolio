import React from 'react';
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            {/* <!-- Navbar --> */}
            <nav>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo">
                            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
                        </div>
                        <div className="nav-links d-flex justify-content-end">
                            <ul className="d-flex justify-content-end w-100">
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/blog" >Blog</NavLink></li>
                                <li><NavLink to="/about" >About</NavLink></li>
                                <li><NavLink to="/project" >Projects</NavLink></li>
                                <li><NavLink to="/contact" >Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar END --> */}
        </>
    )
}

export default Navbar