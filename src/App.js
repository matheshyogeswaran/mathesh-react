import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";
import ProjectDetailsPage from "./components/projects/ProjectDetailsPage"; // Import the new ProjectDetailsPage

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            {/* Main Page */}
            <Route
              path="/"
              element={
                <>
                  <Banner id="home" />
                  <Features id="features" />
                  <Projects id="projects" />
                  <Resume id="resume" />
                  <Blogs id="blogs" />
                  <Contact id="contact" />

                </>
              }
            />
            {/* Project Details Page */}
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
          </Routes>
          <FooterBottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
