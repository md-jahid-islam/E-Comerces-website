import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    // Toggle theme
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg py-4 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo Section */}
        <NavLink to="/home" onClick={() => setIsOpen(false)}>
          <img
            src="/images/portfolio.png"
            alt="Portfolio Logo"
            className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300"
          />
        </NavLink>

        {/* Theme Toggle Button */}
        <button
          className="mr-4 md:mr-0 text-gray-800 dark:text-white focus:outline-none"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex items-center text-gray-800 dark:text-white hover:text-[#36C2CE] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className={`flex flex-col md:flex-row md:gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-white dark:bg-gray-900 text-black dark:text-white font-bold md:items-center transition-all duration-300 ease-in-out transform ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
          }`}
        >
          {['Home', 'About', 'Portfolio', 'Blog', 'Services', 'Contact'].map((item, index) => (
            <li key={index} className="relative group text-center md:text-left py-2 md:py-0">
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg ${isActive ? 'text-[#36C2CE]' : 'text-gray-800 dark:text-white'} hover:text-[#36C2CE] transition-colors duration-300`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#36C2CE] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
