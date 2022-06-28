import React from 'react';
import TestimonialImg from "../images/test-1.jpg";


const Testimonial = () => {
    return (
        <>
            {/* <!-- Testimonial Section --> */}
            <div className="container" id="testimonial">
                <div className="testimonial">
                    <h2>Client Testimonials</h2>

                    <div className="card">
                        <div className="card-quotes"><span>"</span></div>
                        <div className="card-body">
                            <div className="card-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis qui doloremque libero blanditiis magnam reiciendis numquam aliquid, minima neque aperiam recusandae excepturi odio consequuntur dolorum delectus. Quibusdam repudiandae quo ipsam?
                            </div>
                            <div className="card-img">
                                <img src={TestimonialImg} alt="" />
                            </div>
                            <div className="card-position">CEO at <span>Google</span></div>
                            <div className="card-name">Lorem Ipsum</div>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-quotes"><span>"</span></div>
                        <div className="card-body">
                            <div className="card-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis qui doloremque libero blanditiis magnam reiciendis numquam aliquid, minima neque aperiam recusandae excepturi odio consequuntur dolorum delectus. Quibusdam repudiandae quo ipsam?
                            </div>
                            <div className="card-img">
                                <img src={TestimonialImg} alt="" />
                            </div>
                            <div className="card-position">CEO at <span>Google</span></div>
                            <div className="card-name">Lorem Ipsum</div>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-quotes"><span>"</span></div>
                        <div className="card-body">
                            <div className="card-desc">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis qui doloremque libero blanditiis magnam reiciendis numquam aliquid, minima neque aperiam recusandae excepturi odio consequuntur dolorum delectus. Quibusdam repudiandae quo ipsam?
                            </div>
                            <div className="card-img">
                                <img src={TestimonialImg} alt="" />
                            </div>
                            <div className="card-position">CEO at <span>Google</span></div>
                            <div className="card-name">Lorem Ipsum</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial Section END --> */}
        </>
    )
}

export default Testimonial