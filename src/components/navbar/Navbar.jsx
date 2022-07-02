import React, { useState } from 'react';
import "./Navbar.css";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const [menu, setMenu] = useState(true)
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav>
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-center flex-sm-column justify-content-sm-between">
                        <div className="logo">
                            <NavLink to="/"><img src={Logo} alt="" /></NavLink>
                        </div>
                        <div className="nav-links d-flex justify-content-end">
                            <ul className="d-flex justify-content-end w-100 flex-sm-column align-items-sm-center" style={{ display: menu ? "none" : "flex" }}>
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/blog" >Blog</NavLink></li>
                                <li><NavLink to="/about" >About</NavLink></li>
                                <li><NavLink to="/project" >Projects</NavLink></li>
                                <li><NavLink to="/contact" >Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mob-menu' onClick={() => {
                    setMenu(!menu)
                }}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
            {/* <!-- Navbar END --> */}
        </>
    )
}

export default Navbar