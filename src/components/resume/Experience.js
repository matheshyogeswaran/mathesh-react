import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
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
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="CodeRush 2023 by INTECS"
            subTitle="CodeRush 2023 Participant: Contributed to Questions, Web Dev, & Design Teams"
            result="INTECS"
            des="During CodeRush 2023, I contributed to the Questions and Moderating Team, Web Development Team - Website, and Design Team. My roles included managing inquiries, enhancing website functionality, and creating captivating visual assets, respectively."
          />
          <ResumeCard
            id="resumeCard"
            title="1st Year Batch Representative"
            subTitle="Faculty of IT -University of Moratuwa"
            result="UOM"
            des="I am the elected representative for the first-year student batch at the University of Moratuwa."
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="Hackmoral 5 by INTECS"
            subTitle="Organized by the Organizing Committee and built by the Web Development Team"
            result="INTECS"
            des="Hackmoral 5 is a mini hackathon organized by INTECS, promoting problem-solving skills among IT students."
          />
           <ResumeCard
            id="resumeCard"
            title="Writer at LinkIT"
            subTitle="LinkIT - INTECS - (2023 - Present)"
            result="INTECS - UOM"
            des="As an active member of the INTECS club at university, I contribute regularly by writing articles on various topics. It's a popular destination with a growing number of highly qualified homegrown graduates, and I take pride in sharing insights and knowledge through my contributions."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
