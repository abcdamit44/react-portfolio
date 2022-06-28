import React, { useRef } from 'react';
import "./Portfolio.css";
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Project from './Project';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import Testimonial from './Testimonial';

const Portfolio = () => {
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
            <Navbar />
            <Banner />
            <About />
            <Project />
            <Testimonial />

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

            <Footer />


        </>
    )
}

export default Portfolio
