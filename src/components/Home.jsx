import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MyImage from "../images/my-img.png";
import AppDev from "../images/app-dev.png";
import DigitalMarket from "../images/dm.png";
import WebDev from "../images/web-dev.png";
import DevOps from "../images/dev-ops.png";
import { NavLink } from "react-router-dom";



const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (form.current.first_name.value && form.current.last_name.value && form.current.user_email.value && form.current.message.value) {
            emailjs.sendForm('service_a2t8e0j', 'template_776lfba', form.current, 'Lc-iAvWOyMAbOgtV2')
                .then((result) => {
                    alert("Sent")
                }, (error) => {
                    alert("Not Sent!!")
                });
            console.log(form.current.first_name.value);
            form.current.reset();
        } else {
            alert("Please fill the form")
        }
    };
    return (
        <>

            {/* <!-- Banner --> */}
            <div className="banner container mt-5">
                <div className="d-flex">
                    <div className="banner-content">
                        <h2>my name is </h2>
                        <h1>Amit Singh</h1>
                        <h3>Web development, web design, digital marketing</h3>
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, quia.</h4>
                        <NavLink to="/">Read More</NavLink>
                    </div>
                    <div className="banner-img">
                        <img src={MyImage} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- Banner END --> */}
            {/* <!-- About Section --> */}
            <div className="container" id="about">
                <div className="about">
                    <h2>About</h2>
                    <p>My Name is Amit Kumar Singh. I am from Bokaro Steel City. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate, error a aperiam asperiores sed minus facilis, qui aspernatur inventore excepturi sit quidem nesciunt, quis odit.
                        Nemo voluptate vero illum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa expedita distinctio assumenda tempore officiis quae cupiditate eaque nulla vitae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa expedita distinctio assumenda tempore officiis quae cupiditate eaque nulla vitae.</p>
                    <NavLink to="/projects">Let's Start <span>&rarr;</span></NavLink>
                </div>
            </div>
            {/* <!-- About Section END --> */}

            {/* <!-- projects Section --> */}
            <div className="container" id="projects">
                <div className="projects">
                    <h2>Projects</h2>
                    <div className="d-flex justify-content-between">
                        <div className="card">
                            <div className="card-img">
                                <img src={WebDev} alt="" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">Web Development</div>
                                <div className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, et.
                                </div>
                                <div className="card-btn"><NavLink to="/">Hire Me </NavLink></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src={AppDev} alt="" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">App Development</div>
                                <div className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, et.
                                </div>
                                <div className="card-btn"><NavLink to="/">Hire Me </NavLink></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src={DigitalMarket} alt="" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">Digital Marketing</div>
                                <div className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, et.
                                </div>
                                <div className="card-btn"><NavLink to="/">Hire Me </NavLink></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src={DevOps} alt="" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">Devops</div>
                                <div className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, et.
                                </div>
                                <div className="card-btn"><NavLink to="/">Hire Me </NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- projects Section END --> */}
            {/* <!-- Contact Section --> */}
            <div className="container" id="contact">
                <div className="contact">
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="d-flex">
                            <input type="text" name="first_name" id="" placeholder="First Name" />
                            <input type="text" name="last_name" id="" placeholder="Last Name" />
                        </div>
                        <div className="mt-3 d-flex">
                            <input type="email" name="user_email" id="user_email" className="w-100" placeholder="Email" />
                        </div>
                        <div className="d-flex mt-3">
                            <textarea name="message" id="" cols="30" rows="10" className="w-100" placeholder="Message"></textarea>
                        </div>
                        <div className="mt-3">
                            <button type="submit">Submit <span>&rarr;</span></button>
                        </div>

                    </form>
                </div>
            </div>
            {/* <!-- Contact Section END--> */}

        </>
    )
}

export default Home