import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { groceryImg, trackingImg } from "../../public/assets";
import burgerImg from '../../public/assets/image/burger.png'

import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col gap-28 mt-10 items-center justify-between">
        {/* ProjectOne */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href=""
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={groceryImg}
                alt="groceryImg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Grocery Website</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16  rounded-md'>Developed using HTML, CSS, and JavaScript, this dynamic page features an intuitive interface resembling a modern grocery store. <span className='text-textGreen'>
                With interactive elements like dynamic product listings and user-friendly forms, it ensures an engaging user experience.</span></p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li >HTML</li>
                    <li >CSS</li>
                    <li >JavaScript</li>
                </ul>
                <div className='text-2xl flex gap-4 '>
                    <a href="https://github.com/Fatima2497/E-Commerce/tree/main" target='_blank' className='hover:text-textGreen duration-300'>
                        <TbBrandGithub />
                    </a>
                    <a href="" target='_blank' className='hover:text-textGreen duration-300'>
                        <RxOpenInNewWindow />
                    </a>
                </div>
          </div>
        </div>
      </div>
      {/* ProjectTwo */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href="https://landing-page-burger-app.vercel.app/"
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={burgerImg}
                alt="burgerImg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">BurgerShop Website</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16  rounded-md'>Crafted with Next.js and Tailwind CSS, this page offers seamless navigation and optimized performance. Its sleek design perfectly showcases the delicious offerings of a burger brand. <span className='text-textGreen'> With interactive elements like dynamic product listings and user-friendly forms, it ensures an engaging user experience.</span></p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>NextJS</li>
                    <li>React JS</li>
                    <li>Tailwind CSS</li>
                </ul>
                <div className='text-2xl flex gap-4 '>
                    <a href="https://github.com/Fatima2497/LandingPage-BurgerApp" target='_blank' className='hover:text-textGreen duration-300'>
                        <TbBrandGithub />
                    </a>
                    <a href="https://landing-page-burger-app.vercel.app/" target='_blank' className='hover:text-textGreen duration-300'>
                        <RxOpenInNewWindow />
                    </a>
                </div>
          </div>
        </div>
      </div>
      {/* ProjectThree */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://track-app-navy.vercel.app/"
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={trackingImg}
                alt="trackingImg"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">TrackApp Website</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16  rounded-md'>With Next.js, I&apos;ve ensured seamless navigation and optimized performance, providing users with a smooth experience from start to finish. Leveraging the power of the MERN stack, I've implemented robust authentication features and performed CRUD operations seamlessly.<span className='text-textGreen'> By creating RESTful APIs, I&apos;ve enabled efficient data management, empowering users to track their progress effortlessly.</span> </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>NextJS</li>
                    <li>React JS</li>
                    <li>CSS3</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                </ul>
                <div className='text-2xl flex gap-4 '>
                    <a href="https://github.com/Fatima2497/Track-app" target='_blank' className='hover:text-textGreen duration-300'>
                        <TbBrandGithub />
                    </a>
                    <a href="https://track-app-navy.vercel.app/" target='_blank' className='hover:text-textGreen duration-300'>
                        <RxOpenInNewWindow />
                    </a>
                </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
