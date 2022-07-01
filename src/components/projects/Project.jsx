import React from 'react';
import "./Project.css";

const Project = () => {
    return (
        <>
            {/* <!-- projects Section --> */}
            <div className="container" id="projects">
                <div className="projects project-single">
                    <h2>Projects</h2>
                    <div className="d-flex justify-content-between column-reverse ">
                        <div className="content">
                            <h3>Project 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione modi dignissimos exercitationem fugiat, quo optio iste culpa nostrum doloribus adipisci fuga accusantium impedit molestiae doloremque. Cupiditate modi repellat dolore.</p>
                            <a href="https://picsum.photos/">View Project  <span>&rarr;</span></a>
                        </div>
                        <div className="project-snap">
                            <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5 ">
                        <div className="project-snap">
                            <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="content">
                            <h3>Project 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione modi dignissimos exercitationem fugiat, quo optio iste culpa nostrum doloribus adipisci fuga accusantium impedit molestiae doloremque. Cupiditate modi repellat dolore.</p>
                            <a href="https://picsum.photos/">View Project  <span>&rarr;</span></a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5 column-reverse ">
                        <div className="content">
                            <h3>Project 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione modi dignissimos exercitationem fugiat, quo optio iste culpa nostrum doloribus adipisci fuga accusantium impedit molestiae doloremque. Cupiditate modi repellat dolore.</p>
                            <a href="https://picsum.photos/">View Project  <span>&rarr;</span></a>
                        </div>
                        <div className="project-snap">
                            <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5 mb-5 ">
                        <div className="project-snap">
                            <img src="https://picsum.photos/id/237/200/300" alt="" />
                        </div>
                        <div className="content">
                            <h3>Project 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione modi dignissimos exercitationem fugiat, quo optio iste culpa nostrum doloribus adipisci fuga accusantium impedit molestiae doloremque. Cupiditate modi repellat dolore.</p>
                            <a href="https://picsum.photos/">View Project  <span>&rarr;</span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- projects Section END --> */}
        </>
    )
}

export default Project