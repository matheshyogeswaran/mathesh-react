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
      {/* First Job - Software Engineering Trainee */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Jul 2024 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="Software Engineering Trainee"
            subTitle="Infinity Innovators (Jul 2024 - Present)"
            result="Colombo 03, Colombo"
            des={
              <>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>
                    Developed and integrated{" "}
                    <strong>Single Sign-On (SSO)</strong> functionality for
                    Google, Facebook, Amazon, and Apple, enhancing user
                    authentication in both <strong>iOS</strong> and{" "}
                    <strong>Android</strong> versions of the mobile app.
                  </li>
                  <li>
                    Integrated <strong>Google AdMob</strong> for monetization
                    within the app, optimizing ad placements for better revenue
                    generation across platforms.
                  </li>
                  <li>
                    Worked on the <strong>Android Play Console</strong> and{" "}
                    <strong>App Store Connect</strong> to prepare the app for
                    publication, ensuring compliance with platform guidelines.
                  </li>
                  <li>
                    Successfully published the app on the{" "}
                    <strong>Google Play Store</strong> and the{" "}
                    <strong>Apple App Store</strong>, making it available for
                    public download on both platforms.
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>

      {/* Second Job - Software Engineer Intern */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Jan 2024 - Jun 2024
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            id="resumeCard"
            title="Software Engineer Intern"
            subTitle="Infinity Innovators (Jan 2024 - Jun 2024)"
            result="Colombo 03, Colombo"
            des={
              <>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>
                    Initiated the mobile app development with{" "}
                    <strong>React Native</strong>, achieving{" "}
                    <strong>60%</strong> completion by the end of the
                    internship.
                  </li>
                  <li>
                    Implemented <strong>AWS Cognito</strong> for secure user
                    authentication, utilizing <strong>Cognito Authorizers</strong>{" "}
                    for API security.
                  </li>
                  <li>
                    Engineered image upload functionality using{" "}
                    <strong>AWS S3</strong>, integrated with{" "}
                    <strong>DynamoDB</strong> and <strong>Lambda</strong> for
                    efficient data management.
                  </li>
                  <li>
                    Developed RESTful APIs in <strong>Node.js</strong> using
                    serverless architecture for React Native integration.
                  </li>
                  <li>
                    Integrated <strong>Google Maps</strong> for real-time
                    location tracking on iOS and Android platforms.
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
