import React from 'react';
import Home from '../Home';
import About from '../about/About';
import Project from '../projects/Project';
import Contact from '../contact/Contact';
import Blog from '../Blog';
import {
    Routes,
    Route,
} from "react-router-dom";


const Portfolio = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Portfolio
