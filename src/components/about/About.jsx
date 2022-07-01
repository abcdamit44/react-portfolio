import React from 'react';
import Certificate1 from "../../images/HTML Certificate.jpg";
import Certificate2 from "../../images/Bootstrap certificate.jpg";
import Certificate3 from "../../images/PHP for Wordpress.jpg";
import Certificate4 from "../../images/JS Certificate.jpg";
import "./About.css"

const About = () => {
    return (
        <>
            {/* <!-- About Section --> */}
            <div className="container" id="about">
                <div className="about about-single" style={{ textAlign: "center" }}>
                    <h2>About</h2>
                    <p style={{ margin: "auto" }}>My Name is Amit Kumar Singh. I am from Bokaro Steel City. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate, error a aperiam asperiores sed minus facilis, qui aspernatur inventore excepturi sit quidem nesciunt, quis odit.
                        Nemo voluptate vero illum.</p>
                    <p style={{ margin: "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa expedita distinctio assumenda tempore officiis quae cupiditate eaque nulla vitae.</p>
                    <p style={{ margin: "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa expedita distinctio assumenda tempore officiis quae cupiditate eaque nulla vitae.</p>

                    <div className="img-box">
                        <span data-fancybox="certificate" data-src={Certificate1}>
                            <img src={Certificate1} alt="" />
                        </span>
                        <span data-fancybox="certificate" data-src={Certificate2}>
                            <img src={Certificate2} alt="" />
                        </span>
                        <span data-fancybox="certificate" data-src={Certificate3}>
                            <img src={Certificate3} alt="" />
                        </span>
                        <span data-fancybox="certificate" data-src={Certificate4}>
                            <img src={Certificate4} alt="" />
                        </span>
                    </div>

                </div>
            </div>


            {/* <!-- About Section END --> */}
        </>
    )
}

export default About