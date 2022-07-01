import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
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
            {/* <!-- Contact Section --> */}
            <div className="container" id="contact">
                <div className="contact contact-single ">
                    <h2>Contact Me</h2>
                    <div className="contact-details">
                        <a href="mailto:abcdamit44@gmail.com" className='contact-email'><i className="text-white fa-solid fa-envelope"></i> <span className='text-red'>abcdamit44@gmail</span></a>
                        <a href="tel:7870463180" className='contact-phone'><i className="text-white fa-solid fa-phone"></i> <span className='text-red'>7870463180</span></a>
                        <div className="contact-socialIcons">
                            <a href="https://www.linkedin.com/in/amit-singh-b96836142/" target="_linkedin"><i className="text-white fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/abcdamit44" target="_github"><i className="text-white fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/_amit_singh_44/" target="_instagram"><i className="text-white fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

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

export default Contact
