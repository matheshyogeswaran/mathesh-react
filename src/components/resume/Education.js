import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
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
      {/* part one */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="B.Sc (Hons.) in Information Technology"
            subTitle="University Of Moratuwa (2021 - Present)"
            // result="3.90/4"
            des="The University of Moratuwa is a public university in Sri Lanka. It is located on the bank of the Bolgoda Lake in Katubedda, Moratuwa"
          />
          <ResumeCard
            id="resumeCard"
            title="Advanced Level - Physical Science"
            subTitle="St John's College Jaffna (2011 - 2018)"
            result="A 2B"
            des="St. John's College is a private school in Jaffna, Sri Lanka. Founded in 1823 by British Anglican missionaries, it is one of Sri Lanka's oldest schools."
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="Software Engineering Intern"
            subTitle=" Infinity Innovators - (2024 - Present)"
            result="Colombo"
            des="I have been actively engaged in software development utilizing React Native and React.js frameworks, alongside AWS Serverless and Amplify services. "
          />
          <ResumeCard
            id="resumeCard"
            title="Writer at LinkIT"
            subTitle="LinkIT - INTECS - (2023 - Present)"
            result="INTECS - UOM"
            des="As an active member of the INTECS club at university, I contribute regularly by writing articles on various topics. It's a popular destination with a growing number of highly qualified homegrown graduates, and I take pride in sharing insights and knowledge through my contributions."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
