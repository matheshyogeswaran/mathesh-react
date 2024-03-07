import React from 'react'
import Title from '../layouts/Title'
import { HardwareProject, eprs, delivery,reactVS } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
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
          title="Cornflakes Maker"
          des="The system automates cornflakes mixing for office employees using RFID-tagged ID cards, ensuring quick, hygienic, and free meals, thus addressing time constraints and dissatisfaction with manual food serving."
          src={HardwareProject}
          githubLink="https://github.com/matheshyogeswaran/Hardware-project-L1.git"
        // websiteLink="https://cornflakesmaker.com"
        />
        <ProjectsCard
          title="EPRS"
          des="2nd Year project Role-Group Leader Develop an appropriate & effective employee performance review system (EPRS) to review the performance of an employee using the data of an employee related to GIT, JIRA, leave system Technology"
          src={eprs}
          githubLink="https://github.com/orgs/infinitix36/repositories"
          websiteLink="https://eprs-frontend.onrender.com/"
        />
        <ProjectsCard
          title="Delivery App "
          des="Supermarket System revolutionizes retail operations through seamless integration of inventory, sales, and customer management. Employing Microservices Architecture, it ensures scalability and efficiency, enhanced by features like RabbitMQ and Keycloak for messaging and authentication."
          src={delivery}
          githubLink="https://github.com/matheshyogeswaran/NetroShop"
        />
        <ProjectsCard
          title="ReactDocComBuilder"
          des="ReactDocComBuilder is a powerful tool for React developers who want to streamline their documentation process. With ReactDocComBuilder, you can effortlessly generate comprehensive documentation for your React components and projects right within Visual Studio Code."
          src={reactVS}
          githubLink="https://github.com/matheshyogeswaran/ReactDocComBuilder"
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
    </section>
  );
}

export default Projects