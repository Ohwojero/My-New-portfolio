import { Routes, Route } from "react-router-dom";

import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

const BaseRoute = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact/>} />
            
        </Routes>
    );
};

export default BaseRoute;
