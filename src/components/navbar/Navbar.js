import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import hooks
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { favicon } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // Mobile menu toggle
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // To check the current URL path

  // Handle scrolling within the page or navigation to Home
  const handleNavClick = (link) => {
    // If already on the Home Page
    if (location.pathname === "/") {
      const section = document.getElementById(link); // Find section by ID
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
      }
    } else {
      // Navigate to Home and scroll after rendering
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(link);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure DOM is loaded
    }
    setShowMenu(false); // Close the mobile menu
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <div>
        <img className="w-10" src={favicon} alt="favicon" />
      </div>

      {/* Desktop Menu */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              onClick={() => handleNavClick(link)} // Handle click
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        {showMenu ? <MdClose /> : <FiMenu />}
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <img className="w-12" src={favicon} alt="favicon" />
            <span
              onClick={() => setShowMenu(false)}
              className="text-2xl text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <MdClose />
            </span>
          </div>

          <ul className="flex flex-col gap-6">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="text-lg text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                onClick={() => handleNavClick(link)} // Handle click
              >
                {title}
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.facebook.com/matheshes/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/mathesh_yoges"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mathesh-yogeswaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
