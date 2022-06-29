import React from 'react';
import Certificate1 from "../images/HTML Certificate.jpg";
import "./About.css"

const About = () => {
    return (
        <>
            {/* <!-- About Section --> */}
            <div className="container" id="about">
                <div className="about" style={{ textAlign: "center" }}>
                    <h2>About</h2>
                    <p style={{ margin: "auto" }}>My Name is Amit Kumar Singh. I am from Bokaro Steel City. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate, error a aperiam asperiores sed minus facilis, qui aspernatur inventore excepturi sit quidem nesciunt, quis odit.
                        Nemo voluptate vero illum.</p>
                    <p style={{ margin: "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa expedita distinctio assumenda tempore officiis quae cupiditate eaque nulla vitae.</p>
                    <p style={{ margin: "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa expedita distinctio assumenda tempore officiis quae cupiditate eaque nulla vitae.</p>

                    <div className="img-box">
                        <a href={Certificate1}>
                            <img src={Certificate1} alt="" />
                        </a>
                        <a href={Certificate1}>
                            <img src={Certificate1} alt="" />
                        </a>
                        <a href={Certificate1}>
                            <img src={Certificate1} alt="" />
                        </a>
                        <a href={Certificate1}>
                            <img src={Certificate1} alt="" />
                        </a>
                    </div>

                </div>
            </div>


            {/* <!-- About Section END --> */}
        </>
    )
}

export default About