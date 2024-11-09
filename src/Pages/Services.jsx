 import React from 'react'
 import { TbArrowLeftFromArc } from "react-icons/tb";
 import { Link } from 'react-router-dom';


 const Services = () => {
  return (
    <>
    <div className="container">
      <div className="hader">
        <h2 className=' text-2xl font-bold mt-10'> Services.</h2>
        <h3 className=' w-[400px] h-[2px] border border-solid bg-[#fff] mt-[-6px] ml-[120px]'></h3>
        <h2 className=' mt-5 font-bold hover:text-[#fff]'> BUILDING DIGITAL PRODUCT WITH BETTER EXPERIENCE</h2>
        <p className=' mt-5 font-bold hover:text-[#fff]'> Our vision is to be a trailblazing force in the world of web design and development, recognized for our <br /> unwavering commitment to excellence, integrity, and customer satisfaction.</p>
        <div className=''>
          <img className=' w-[100px] h-[100px] rounded-lg mt-10 hover:scale-105 transition' src=" public/images/firebase.png" alt="img" />
          <h2 className=' text-2xl font-bold text-black hover:text-[#C0C78C] mt-5 transition uppercase'>firebase development</h2> 
          <p className=' w-[270px] h-[95px] text-gray-500 hover:text-[#1E201E] mt-4'> Hendrerit molestie consectet molestie id dui in eget. Lectus amet diam amet ultricies convallis to the figma web page design ultricies enim.</p>
           <Link to='#' ><TbArrowLeftFromArc className=' text-[16px] mt-10 ml-10 bg-[#B4E380] hover:bg-[#FFF1DB] transform- scale-105' /></Link>
           
          
            <div className=' mt-[-360px] ml-[330px]'>
          <img className=' w-[100px] h-100px] rounded-lg mt-10 hover:scale-105 transition animate-bounce' src=" public/images/brand.png" alt="img" />

          <h2 className=' text-2xl font-bold text-black hover:text-[#C0C78C] mt-5 transition uppercase'>VISUAL BRANDING API</h2>
          <p className=' w-[270px] h-[95px] text-gray-500 hover:text-[#1E201E] mt-4'> A aliquam hac quis habitant dolor nunc metus sed. Sed commodo mauris purus molestie fames.</p>
         <Link to='#' ><TbArrowLeftFromArc className=' text-[16px] mt-10 ml-10 bg-[#B4E380] hover:bg-[#FFF1DB] transform- scale-105' /></Link>
           </div>

          <div className=' mt-[-360px] ml-[670px]'>
          <marquee><img className=' w-[100px] h-[100px] rounded-lg mt-10 hover:scale-105 transition' src=" public/images/react.png" alt="img" /></marquee>
          <h2 className=' text-2xl font-bold text-black hover:text-[#C0C78C] mt-5 transition uppercase'>REACT DEVELOPMENT </h2>
          <p className=' w-[270px] h-[95px] text-gray-500 hover:text-[#1E201E] mt-4'> Hendrerit molestie consectet molestie id dui in eget. Lectus amet diam amet ultricies convallis to the figma web page design ultricies enim.</p>
           <Link to='#' ><TbArrowLeftFromArc className=' text-[16px] mt-10 ml-10 bg-[#B4E380] hover:bg-[#FFF1DB] transform- scale-105' /></Link>

          </div>
          <div className=' mt-[-360px] ml-[1000px]'>
           <img className=' w-[100px] h-[100px] rounded-lg mt-10 hover:scale-105 transition animate-pulse' src=" public/images/webdevelop.png" alt="img" />  
          <h2 className=' text-2xl font-bold text-black hover:text-[#C0C78C] mt-5 transition uppercase'>WEB DEVELOPMENT</h2>
          <p className=' w-[270px] h-[95px] text-gray-500 hover:text-[#1E201E] mt-4'>Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget ultricies turpis elit augue cras mauris lorem mauris.</p>
           <Link to='#' ><TbArrowLeftFromArc className=' text-[16px] mt-10 ml-10 bg-[#B4E380] hover:bg-[#FFF1DB] transform- scale-105' /></Link>

          </div>
          </div>
          

        </div>
      </div>
    
    </>
  )
 }

 export default Services