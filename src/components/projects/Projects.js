import React, { useState } from 'react';

import Title from '../layouts/Title'
import { HardwareProject, eprs, delivery, reactVS, OSM, githubChart, json } from "../../assets/index";
import ProjectModal from './ProjectModal'; // Assuming you have a ProjectModal component
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="react-native-animated-icons-json"
          des="No more tedious JSON file management - simply call the animation's name and watch it come to life. Easily save and access your JSON animations via JSON Saver, ensuring convenient management. Join our community to explore a diverse collection of animated icons and effortlessly enhance your React Native projects with a touch of interactivity. "
          src={json}
          githubLink="https://github.com/matheshyogeswaran/react-native-animated-icons-json"
          websiteLink="https://www.linkedin.com/posts/mathesh-yogeswaran_reactnative-animatedicons-jsonsaver-activity-7178427506629259265-lN8c?utm_source=share&utm_medium=member_desktop"
          onClick={() => handleProjectClick({
            title: "react-native-animated-icons-json",
            description: "No more tedious JSON file management - simply call the animation's name and watch it come to life. Easily save and access your JSON animations via JSON Saver, ensuring convenient management. Join our community to explore a diverse collection of animated icons and effortlessly enhance your React Native projects with a touch of interactivity. ",
            githubLink: "https://github.com/matheshyogeswaran/react-native-animated-icons-json",
            technologies: ["React", "NPM"],
            image: json // Assuming HardwareProject is the image URL
          })}
        />
        <ProjectsCard
          title="Cornflakes Maker"
          des="The system automates cornflakes mixing for office employees using RFID-tagged ID cards, ensuring quick, hygienic, and free meals, thus addressing time constraints and dissatisfaction with manual food serving."
          src={HardwareProject}
          githubLink="https://github.com/matheshyogeswaran/Hardware-project-L1.git"
          // websiteLink="https://cornflakesmaker.com"
          onClick={() => handleProjectClick({
            title: "Cornflakes Maker",
            description: "The system automates cornflakes mixing for office employees using RFID-tagged ID cards, ensuring quick, hygienic, and free meals, thus addressing time constraints and dissatisfaction with manual food serving.",
            githubLink: "https://github.com/matheshyogeswaran/Hardware-project-L1.git",
            technologies: ["RFID", "Automation"],
            image: HardwareProject // Assuming HardwareProject is the image URL
          })}
        />
        <ProjectsCard
          title="EPRS"
          des="2nd Year project Role-Group Leader Develop an appropriate & effective employee performance review system (EPRS) to review the performance of an employee using the data of an employee related to GIT, JIRA, leave system Technology"
          src={eprs}
          githubLink="https://github.com/orgs/infinitix36/repositories"
          websiteLink="https://eprs-frontend.onrender.com/"
          onClick={() => handleProjectClick({
            title: "EPRS",
            description: "2nd Year project Role-Group Leader Develop an appropriate & effective employee performance review system (EPRS) to review the performance of an employee using the data of an employee related to GIT, JIRA, leave system Technology",
            githubLink: "https://github.com/orgs/infinitix36/repositories",
            technologies: ["MERN"],
            image: eprs // Assuming HardwareProject is the image URL
          })}
        />
        <ProjectsCard
          title="Delivery App "
          des="Supermarket System revolutionizes retail operations through seamless integration of inventory, sales, and customer management. Employing Microservices Architecture, it ensures scalability and efficiency, enhanced by features like RabbitMQ and Keycloak for messaging and authentication."
          src={delivery}
          githubLink="https://github.com/matheshyogeswaran/NetroShop"
          onClick={() => handleProjectClick({
            title: "Delivery App",
            description: "Supermarket System revolutionizes retail operations through seamless integration of inventory, sales, and customer management. Employing Microservices Architecture, it ensures scalability and efficiency, enhanced by features like RabbitMQ and Keycloak for messaging and authentication.",
            githubLink: "https://github.com/matheshyogeswaran/NetroShop",
            technologies: ["SpringBoot", "Kafka", "API Gateway"],
            image: delivery // Assuming HardwareProject is the image URL
          })}
        />
        <ProjectsCard
          title="ReactDocComBuilder"
          des="ReactDocComBuilder is a powerful tool for React developers who want to streamline their documentation process. With ReactDocComBuilder, you can effortlessly generate comprehensive documentation for your React components and projects right within Visual Studio Code."
          src={reactVS}
          websiteLink="https://marketplace.visualstudio.com/items?itemName=Mathesh.ReactDocComBuilder"
          githubLink="https://github.com/matheshyogeswaran/ReactDocComBuilder"
          onClick={() => handleProjectClick({
            title: "ReactDocComBuilder",
            description: "ReactDocComBuilder is a powerful tool for React developers who want to streamline their documentation process. With ReactDocComBuilder, you can effortlessly generate comprehensive documentation for your React components and projects right within Visual Studio Code.",
            websiteLink: "https://marketplace.visualstudio.com/items?itemName=Mathesh.ReactDocComBuilder",
            githubLink: "https://github.com/matheshyogeswaran/ReactDocComBuilder",
            technologies: ["React", "Visual Studio Code"],
            image: reactVS
          })}
        />
        <ProjectsCard
          title="Github Details Get Web App"
          des="This application generates commit details and a chart comparing commits and contributors when provided with a username and repository name"
          src={githubChart}
          websiteLink="https://mathesh-github-details.netlify.app/"
          githubLink="https://github.com/matheshyogeswaran/git_chart_commits"
          onClick={() => handleProjectClick({
            title: "Github Details Get Web App",
            description: "This application generates commit details and a chart comparing commits and contributors when provided with a username and repository name",
            websiteLink: "https://mathesh-github-details.netlify.app/",
            githubLink: "https://github.com/matheshyogeswaran/git_chart_commits",
            technologies: ["React"],
            image: githubChart
          })}
        />
        <ProjectsCard
          title="Open Street Map(OSM) With ReactJS Web App"
          des="This application is designed to retrieve your current location and display the results based on the place you want to search for."
          src={OSM}
          websiteLink="https://mathesh-osm-react-map.netlify.app/"
          githubLink="https://github.com/matheshyogeswaran/openmap_react"
          onClick={() => handleProjectClick({
            title: "Open Street Map(OSM) With ReactJS Web App",
            description: "This application is designed to retrieve your current location and display the results based on the place you want to search for.",
            websiteLink: "https://mathesh-osm-react-map.netlify.app/",
            githubLink: "https://github.com/matheshyogeswaran/openmap_react",
            technologies: ["React", "OpenStreetMap"],
            image: OSM
          })}
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
      {showModal && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

export default Projects