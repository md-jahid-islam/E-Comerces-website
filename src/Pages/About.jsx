import React from 'react';
import CountUp from 'react-countup';

const AboutSection = () => (
  <div className="about-section container mt-5 px-4 sm:px-6 md:px-8 lg:px-16">
    <h2 className="text-2xl font-bold text-[#4f4f4f] mt-[50px] text-center sm:text-left flex justify-center items-center pt-10 ">About Me</h2>
    <h3 className="absolute border-2 border-[#4f4f4f] w-[150px] sm:w-[200px] flex justify-center items-center mt-[10px]"></h3>

    <div className="divider bg-[#4f4f4f] mt-2 mb-4"></div>
  
    <div className="mt-[30px] sm:mt-[80px] px-4 sm:px-6 text-sm sm:text-base space-y-4">
      {[ 
        { label: 'Name', value: 'Jahidul Islam' },
        { label: 'Nationality', value: 'Bangladesh' },
        { label: 'Phone', value: '+8801540587085' },
        { label: 'Email', value: 'jahidulislamwebbd@gmail.com' },
        { label: 'Experience', value: '2+ years' },
        { label: 'Freelance', value: 'Available' },
        { label: 'Skype', value: 'jahidul.islam' },
        { label: 'Language', value: 'Bangla, English' }
      ].map((item, index) => (
        <div key={index} className="flex space-x-2 sm:space-x-3 flex-wrap">
          <span className="font-bold text-slate-700">{item.label}</span>
          <span>{`: ${item.value}`}</span>
        </div>
      ))}
    </div>

    <div className="flex justify-center sm:justify-start items-center mt-4 sm:mt-[40px]">
      <p className="text-[#4f4f4f] mx-auto sm:mx-0 max-w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed text-center sm:text-left">
        I am currently pursuing a Bachelor's degree in Social Science at Habiganj Govt <br />
        College, Bangladesh. I completed my Higher Secondary Certificate (HSC) in <br /> 
        Humanities at Kabir College Academy in 2023. I also earned my Secondary <br />
        School Certificate (SSC) in Commerce from Hazrat Shahjala High School in <br />
        2021. My academic background fuels my passion for learning and growth.
      </p>
    </div>
  </div>
);

const EducationSection = () => (
  <div className="education-section container mt-[50px] px-4 sm:px-6 lg:px-16">
    <h2 className="text-2xl font-bold text-[#4f4f4f] pt-10 text-center sm:text-left mt-[120px] ">Education</h2>
    <div className="divider bg-slate-400 mt-2 mb-4"></div>
    
    {[ 
      { year: 'Degree Running Student Bachelor of Social Science -2024', title: 'Brindhabon Govt College Habiganj', description: 'Jahidul Islam is a student at Habiganj Govt College, pursuing a Bachelors degree in Social Science with a focus on (Humanities). He began his studies in 2025.' },
      { year: 'Higher Secondary Certificate. -2023', title: 'Kabir College Academy', description: 'Jahidul Islam completed his Higher Secondary Certificate (HSC) in (Humanities) at Habiganj Kabir College Academy in 2023.' },
      { year: 'Secondary School Certificate -2021', title: 'Hazrat Shahjala High School Baniachong , Habiganj', description: 'Jahidul Islam completed his Secondary School Certificate (SSC) in (Commerce) at Hazrat Shahjala (Ra.) High School, Baniachong, Habiganj, in 2021.' }
    ].map((edu, index) => (
      <div key={index} className="education-item mt-12">
        <div className="year bg-slate-700 py-2 px-4 text-white">{edu.year}</div>
        <h3 className="title font-bold text-lg mt-2">{edu.title}</h3>
        <p className="description text-sm mt-2">{edu.description}</p>
      </div>
    ))}
  </div>
);

const ExperienceSection = () => (
  <div className="experience-section container mt-[20px] px-4 sm:px-6 lg:px-16">
    <h2 className="text-2xl font-bold text-[#4f4f4f] text-center sm:text-left">Experience</h2>
    <div className="divider bg-slate-400 mt-2 mb-4"></div>
    
    {[ 
      { period: 'Creative It Institute Uttara Dhaka Bangladesh -2024', title: 'Frontend Developer with React', description: 'As a Frontend Developer specializing in React, Jahidul Islam has experience with various web technologies including React, Redux, Tailwind CSS, Bootstrap, and Firebase.' },
      { period: 'Creative It Institute Uttara Dhaka Bangladesh -2024', title: 'Node.Js', description: 'Jahidul Islam is currently learning Node.js at Creative IT Institute.' },
    ].map((exp, index) => (
      <div key={index} className="experience-item mt-12">
        <div className="period bg-slate-700 py-2 px-4 text-white">{exp.period}</div>
        <h3 className="title font-bold text-lg mt-2">{exp.title}</h3>
        <p className="description text-sm mt-2">{exp.description}</p>
      </div>
    ))}
  </div>
);

const SkillSection = () => (
  <div className="skill-section container mt-16 px-4 sm:px-6 lg:px-16">
    <div className="flex justify-center items-center relative mb-4">
      <h2 className="absolute text-2xl font-bold text-[#4f4f4f] mt-7 text-center sm:text-left">Coding Skills</h2>
      <h3 className="absolute border-2 border-[#4f4f4f] w-[150px] sm:w-[200px] mt-[90px]"></h3>
    </div>
    <div className="divider bg-slate-400 mt-[100px] mb-8"></div>
    <div className="skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-[40px] sm:mt-16">
      {[ 
        { name: 'HTML5', proficiency: 90 },
        { name: 'CSS3', proficiency: 90 },
        { name: 'JavaScript', proficiency: 67 },
        { name: 'jQuery', proficiency: 70 },
        { name: 'Bootstrap', proficiency: 65 },
        { name: 'Figma', proficiency: 100 },
        { name: 'Tailwind CSS', proficiency: 75 },
        { name: 'React Redux', proficiency: 65 },
        { name: 'React Router DOM', proficiency: 80 },
        { name: 'API', proficiency: 85 },
        { name: 'Git & GitHub', proficiency: 85 },
        { name: 'Slick Slider', proficiency: 72 },
        { name: 'Firebase', proficiency: 68 },
        { name: 'Java', proficiency: 78 }
      ].map((skill, index) => (
        <div key={index} className="skill-item text-center transform transition duration-300 hover:scale-110">
          <div className="proficiency-circle relative inline-block w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-[#FF204E] box-shadow-md bg-transparent flex justify-center items-center overflow-hidden transform transition duration-500 hover:bg-[#FF204E] hover:text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-30"></div>
            <CountUp end={skill.proficiency} suffix="%" duration={2} className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF204E] z-10"/>
          </div>
          <p className="skill-name mt-2 text-sm sm:text-base text-[#4f4f4f]">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const MainComponent = () => (
  <div className="main-container">
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <SkillSection />
  </div>
);

export default MainComponent;
