import React from 'react';
import { TbArrowLeftFromArc } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Firebase Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
      imgSrc: "public/images/firebase.png",
    },
    {
      id: 2,
      title: "Visual Branding API",
      description: "A aliquam hac quis habitant dolor nunc metus sed. Sed commodo mauris purus molestie fames.",
      imgSrc: "public/images/brand.png",
    },
    {
      id: 3,
      title: "React Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
      imgSrc: "public/images/react.png",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget ultricies turpis elit augue cras mauris lorem mauris.",
      imgSrc: "public/images/webdevelop.png",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="header text-center">
        <h2 className="text-2xl font-bold mt-10">Services</h2>
        <div className="w-3/4 md:w-[400px] h-[2px] bg-[#4f4f4f] mt-[-6px] mx-auto"></div>
        <h2 className="mt-6 font-bold text-lg md:text-2xl text-[#4f4f4f] transition duration-300 ease-in-out transform hover:scale-105">
          Building Digital Products With Better Experience
        </h2>
        <p className="mt-5 font-bold text-sm md:text-lg text-[#4f4f4f] transition duration-300 ease-in-out">
          Our vision is to be a trailblazing force in the world of web design and development, recognized for our unwavering commitment to excellence, integrity, and customer satisfaction.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card text-center transition-all hover:scale-105 hover:shadow-lg transform duration-300 ease-in-out p-4"
          >
            <img
              className="w-20 h-20 mx-auto rounded-lg mt-5 hover:scale-110 transition duration-300"
              src={service.imgSrc}
              alt={service.title}
            />
            <h2 className="text-lg md:text-xl font-bold text-[#4f4f4f] mt-5 transition duration-300">
              {service.title}
            </h2>
            <p className="w-full mx-auto text-sm md:text-base text-[#4f4f4f] mt-4 transition duration-300 hover:text-[#1E201E]">
              {service.description}
            </p>
            <Link to="#" className="block mt-4 text-lg text-[#4f4f4f] transform hover:scale-110 transition duration-300">
              <TbArrowLeftFromArc className="inline-block text-[16px]" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
