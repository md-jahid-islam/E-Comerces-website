import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="container mx-auto mt-20 px-4">
      <h2 className="text-2xl font-bold text-[#FF0080] hover:text-[#000]">Get In Touch</h2>
      <h2 className="w-1/2 h-[3px] bg-white mt-1 mx-auto"></h2>
      <h3 className="mt-10 text-center">Take a Coffee & Chat With Me</h3>
      
      <div className="flex flex-col md:flex-row justify-center items-start mt-10">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-[#171b22] p-4 hover:scale-105 transition-transform">
          <img className="w-12 h-12" src="public/images/email.png" alt="Email" />
          <h2 className="text-lg font-bold text-white">Email</h2>
          <Link to="mailto:jahidulislamwebbd@gmail.com" className="text-white hover:text-green-500">
            jahidulislamwebbd@gmail.com
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 bg-[#171b22] p-4 hover:scale-105 transition-transform mt-5 md:mt-0 md:ml-5">
          <img className="w-12 h-12" src="public/images/contact.png" alt="Phone" />
          <h2 className="text-lg font-bold text-white">Phone</h2>
          <Link to="#" className="text-white hover:text-green-500">+ 01772353905</Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
        <div className="w-full lg:w-1/2">
          <label className="text-2xl font-bold uppercase">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-12 p-4 mt-2 border-none bg-gray-200"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        
        <div className="w-full lg:w-1/2 mt-5">
          <label className="text-2xl font-bold uppercase">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 p-4 mt-2 border-none bg-gray-200"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="w-full lg:w-1/2 mt-5">
          <label className="text-2xl font-bold uppercase">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 p-4 mt-2 border-none bg-gray-200"
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <div className="flex mt-10 space-x-4">
          <Link to="https://www.canva.com/design/DAGJXJ3MJPo/o1fLyTnMBiJSvy1U2JOKJQ/view?utm_content=DAGJXJ3MJPo&utm_campaign=designshare&utm_medium=link&utm_source=editor">
            <button className="w-36 h-12 bg-green-400 hover:bg-[#DB005B] text-black hover:text-white">Resume</button>
          </Link>
          <button type="submit" className="w-36 h-12 bg-green-400 hover:bg-[#FF0060] text-black hover:text-white">
            Submit Now
          </button>
        </div>
      </form>

      <section className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29072.60109759209!2d91.41629619999999!3d24.37868945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751445418320993%3A0x4aac154dd6283b1f!2sHabiganj!5e0!3m2!1sen!2sbd!4v1723662041183!5m2!1sen!2sbd"
          width="100%"
          height="400"
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
