import React from 'react';
import MyImage from "../images/my-img.png";


const Banner = () => {
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
                        <a href="#">Read More</a>
                    </div>
                    <div className="banner-img">
                        <img src={MyImage} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- Banner END --> */}
        </>
    )
}

export default Banner