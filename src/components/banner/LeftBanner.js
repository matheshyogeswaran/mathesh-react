import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact,FaGithub,FaMedium } from "react-icons/fa";
import {  SiFigma,SiNodedotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.","Mobile Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mathesh Yogeswaran</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Mathesh is undergraduate of university of moratuwa. Who is enthusiastic person to learn IT related things.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://github.com/matheshyogeswaran" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
            </a>
            <a href="https://medium.com/@matheshyogeswaran" target="_blank" rel="noopener noreferrer" className="bannerIcon">

              <FaMedium />
              </a>
              <a href="https://www.linkedin.com/in/mathesh-yogeswaran/" target="_blank" rel="noopener noreferrer" className="bannerIcon">

              <FaLinkedinIn />
              </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <TbBrandReactNative />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner