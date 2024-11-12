import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo Section */}
        <NavLink to="/Home" onClick={() => setIsOpen(false)}>
          <img
            src="public/images/portfolio.png"
            alt="Portfolio Logo"
            className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
          />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex items-center text-gray-800 hover:text-[#36C2CE] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Menu Links */}
        <ul
          className={`flex flex-col md:flex-row md:gap-6 absolute md:static left-0 top-full w-full md:w-auto md:bg-transparent bg-white text-black font-bold md:items-center transition-all duration-300 ease-in-out transform ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
          }`}
        >
          {['Home', 'About', 'Portfolio', 'Blog', 'Services', 'Contact'].map((item, index) => (
            <li key={index} className="relative group text-center md:text-left py-2 md:py-0">
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg ${isActive ? 'text-[#36C2CE]' : 'text-gray-800'} hover:text-[#36C2CE] transition-colors duration-300`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
              {/* Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#36C2CE] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
