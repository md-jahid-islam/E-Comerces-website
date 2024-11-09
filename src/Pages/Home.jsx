import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10 mt-[150px]">
        <div className="baner_part flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-black pt-10 md:pt-20 uppercase hover:text-gray-500 transition-all duration-300">
              Jahidul Islam
            </h1>
            <h2 className="text-lg md:text-xl text-green-600 uppercase mt-3 animate-pulse hover:text-red-600 transition-all duration-300">
              Front-End & React Developer
            </h2>
            <p className="w-72 md:w-80 mt-5 text-[#fff] font-bold hover:text-white transition-all duration-300 animate-pulse">
            
              Hi I'm Jahidul Islam is a passionate front-end developer with a focus on creating dynamic and responsive web applications. With expertise in React, HTML, CSS, JavaScript, and various modern libraries, he crafts seamless user experiences. His projects showcase his skills in building clean, interactive interfaces with attention to detail. Jahidul is dedicated to continuous learning and enhancing his development skills. Explore his portfolio to see his innovative work and contributions to the tech community.
            </p>
            <div className="flex gap-5 mt-[40px]">
              <NavLink to="/About">
                <button className="w-52 h-20 uppercase rounded-full text-white bg-green-700 hover:bg-pink-500 transition-all duration-300 animate-pulse">
                  View Work
                </button>
              </NavLink>
              <NavLink to="/Contact">
                <button className="w-52 h-20 uppercase rounded-full text-gray-900 bg-yellow-400 hover:bg-pink-500 transition-all duration-300 animate-pulse">
                  Contact Me
                </button>
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-10 md:mt-0 md:ml-10 md:w-1/2 flex justify-center md:justify-end">
            <img className="w-56 h-56 md:w-80 md:h-80 rounded-full transition-transform duration-300 transform hover:scale-105 animate-pulse" src="public/images/img.png" alt="Main profile"/>

            <img className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 w-14 h-14 md:w-20 md:h-20 rounded-full transition-transform duration-500 animate-spin hover:scale-105" src="public/images/img1.png" alt="Decorative icon 1"/> 

            <img className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 w-10 h-10 md:w-16 md:h-16 rounded-full transition-transform duration-500 animate-spin hover:scale-105" src="public/images/img2.png" alt="Decorative icon 2" /> 
             
            <h3 className=' absolute pt-[360px] mr-[0px] text-4xl font-bold text-[#fff]'> Md Jahidul Islam</h3>
            <h3 className=' absolute pt-[420px] mr-[5px] text-3xl font-bold text-[#fff] '> Front end & React</h3>
           <div className=' absolute flex justify-center items-center flex-wrap gap-8 pt-[520px] '>
     <div className="main flex gap-4 mt-8">
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/profile.php?id=100083385545891"
        className="social-icon w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-indigo-700 transition-all duration-300 transform hover:bg-indigo-700 hover:text-yellow-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook className="text-white text-2xl font-bold" />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://www.facebook.com/profile.php?id=100083385545891"
        className="social-icon w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-indigo-700 transition-all duration-300 transform hover:bg-indigo-700 hover:text-yellow-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook className="text-white text-2xl font-bold" />
      </a>


      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/jahidul-islam-a5021b325/"
        className="social-icon w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-indigo-700 transition-all duration-300 transform hover:bg-indigo-700 hover:text-yellow-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-white text-2xl font-bold" />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/jahidulislamwebbd/?hl=en"
        className="social-icon w-[50px] h-[50px] bg-[#FF8A8A] rounded-md flex justify-center items-center border border-indigo-700 transition-all duration-300 transform hover:bg-indigo-700 hover:text-yellow-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white text-2xl font-bold" />
       </a>
       </div>


            </div>

            <div className=' absolute pt-[630px]'> 
            <a className="w-[200px] h-[50px] bg-gradient-to-r from-[#FF0075] to-[#FC4100] hover:from-[#FC4100] hover:to-[#FF0075] rounded-lg flex justify-center items-center text-white font-bold transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:rotate-3 hover:border-2 hover:border-[#FC4100] hover:text-[#FC4100]"
             href="/public/images/Jahid-Resume.pdf" download="CV" > CV Download </a>
           </div>

           </div>
          

          
           </div>

           
      
          

         {/* Trusted By Section */}
         <div className="mt-10">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Trusted by World Leading Brands
          </h2>
        </div>
      </div>
    </>
  );
 };

 export default Home;
