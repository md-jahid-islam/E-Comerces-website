import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container px-4 md:px-0">
        <div className="header text-center mt-14">
          <div className=' mt-[100px]'>
          <h2 className="text-2xl font-bold text-[#4f4f4f] ">Blogs.</h2>

          </div>
          <div className="w-[200px] h-[3px] border border-solid  mx-auto bg-slate-400 mt-[5px] "></div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          <div
            data-aos="zoom-in"
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center"
          >
            <img
              className="w-full h-[250px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
              src="public/images/img.png"
              alt="img"
            />
            <h2 className="text-[16px] font-bold hover:text-[#fff] transition mt-5">
              20 April 2026 | Front End Design
            </h2>
            <h3 className="font-bold text-[14px] hover:text-[#fff] transition mt-4">
              Become a Frontend Developer in 5 Simple Steps
            </h3>
            <p className="text-[12px] font-bold hover:text-[#fff] transition mt-4">
              Est a quis ipsum et arcu. Sit eros leo enim sed vivamus. Nulla et eget
              commodo mus suspendisse imperdiet.
            </p>
          </div> 

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center"
          >
            <img
              className="w-full h-[250px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
              src="public/images/img1.png"
              alt="img"
            />
            <h2 className="text-[16px] font-bold hover:text-[#fff] transition mt-5">
              15 August 2028 | Web Design
            </h2>
            <h3 className="font-bold text-[14px] hover:text-[#fff] transition mt-5">
              Become a Web Designer in 5 Simple Steps
            </h3>
            <p className="text-[12px] font-bold hover:text-[#fff] transition mt-5">
              Learn the Basics: Start with HTML, CSS, and JavaScript to build
              foundational skills. Practice Design Tools: Get familiar with tools like
              Figma, Adobe XD, or Sketch.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center"
          >
            <img
              className="w-full h-[250px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
              src="public/images/img3.png"
              alt="img"
            />
            <h2 className="text-[16px] font-bold hover:text-[#fff] transition mt-4">
              20 July 2029 | Web Development
            </h2>
            <h3 className="font-bold text-[14px] hover:text-[#fff] transition mt-4">
              Become a Frontend Developer in 5 Simple Steps
            </h3>
            <p className="text-[12px] font-bold hover:text-[#fff] transition mt-4">
              Master the Fundamentals: Learn HTML, CSS, and JavaScript thoroughly. Learn
              Frameworks: Get proficient with React, Angular, or Vue.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
