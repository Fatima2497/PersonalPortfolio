"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub, TbBrandGmail } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

const Navbar = () => {
  const ref = useRef("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    setShowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick (e) {
    if(e.target.contains(ref.current)){
        setShowMenu(false)
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Image className="w-14" src={logo} alt="logo" /> */}
          <h1>Portfolio</h1>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7 ">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              href="#project"
              onClick={handleScroll}
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>

          <a href="/assets/Arfa Fatima.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Device Icon */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      nitial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      nitial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3, ease: "easeIn" }}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    onClick={handleScroll}
                    className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      nitial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      nitial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>

                <a href="/assets/Arfa Fatima.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
              </div>
              <div className="flex gap-4 mt-20">
                <a href="" target="_blank">
                  <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandGithub />
                  </span>
                </a>
                <a href="" target="_blank">
                  <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandGmail />
                  </span>
                </a>
                <a href="" target="_blank">
                  <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialLinkedin />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;