import React from 'react';
import AppDev from "../images/app-dev.png";
import DigitalMarket from "../images/dm.png";
import WebDev from "../images/web-dev.png";
import DevOps from "../images/dev-ops.png";

const Project = () => {
    return (
        <>
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
                                <div className="card-btn"><a href="#">Hire Me </a></div>
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
                                <div className="card-btn"><a href="#">Hire Me </a></div>
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
                                <div className="card-btn"><a href="#">Hire Me </a></div>
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
                                <div className="card-btn"><a href="#">Hire Me </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- projects Section END --> */}
        </>
    )
}

export default Project