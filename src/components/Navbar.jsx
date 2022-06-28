import React from 'react';
import Logo from "../images/logo.png";


const Navbar = () => {
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo">
                            <a href="#"><img src={Logo} alt="" /></a>
                        </div>
                        <div className="nav-links d-flex justify-content-end">
                            <ul className="d-flex justify-content-end w-100">
                                <li><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
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