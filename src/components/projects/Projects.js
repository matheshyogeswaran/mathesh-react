import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,HardwareProject,eprs ,delivery } from "../../assets/index";
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
          des="A System that make Cornflakes for Office Employees based on RFID tag"
          src={HardwareProject}
        />
        <ProjectsCard
          title="EPRS"
          des="2nd Year project Role-Group Leader Develop an appropriate & effective employee performance review system (EPRS) to review the performance of an employee using the data of an employee related to GIT, JIRA, leave system Technology"
          src={eprs}
        />
        <ProjectsCard
          title="Delivery App "
          des="Supermarket System revolutionizes retail operations through seamless integration of inventory, sales, and customer management. Employing Microservices Architecture, it ensures scalability and efficiency, enhanced by features like RabbitMQ and Keycloak for messaging and authentication."
          src={delivery}
        />
        <ProjectsCard
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
        />
      </div>
    </section>
  );
}

export default Projects