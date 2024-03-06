import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    const card = document.getElementById("resumeCard");
    if (card) {
      const height = card.offsetHeight;
      setCardHeight(height + 100);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      style={{ minHeight: cardHeight }} // Set the minimum height dynamically
    >
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="AWS Educate Introduction to Cloud 101"
            subTitle="Introduction to Cloud Computing"
            result=""
            des="This course provides an introduction to cloud computing fundamentals using AWS Educate. Learn the basics of cloud technology and its applications in today's digital landscape. Explore essential concepts such as scalability, security, and cost management."
            link="https://www.credly.com/badges/e3f93e7c-455e-4acc-bfa5-bf2aa5e6b3f2/public_url"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="Responsive Web Design - freeCodeCamp"
            subTitle="Master the Art of Responsive Web Design"
            result=""
            des="This course from freeCodeCamp is designed to teach you the principles and techniques of responsive web design, ensuring your websites look great and function seamlessly across various devices and screen sizes."
            link="https://www.freecodecamp.org/certification/mathesh/responsive-web-design"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
