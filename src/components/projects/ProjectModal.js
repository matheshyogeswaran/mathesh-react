import React from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div>
      {/* Background overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" onClick={onClose}></div>
      {/* Modal content */}
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="bg-gradient-to-b from-bodyColor to-[#202327] bg-opacity-100 text-white rounded-md p-6 max-w-4xl relative z-10"> {/* Increase max-width */}
          <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
          <div className="overflow-y-auto max-h-96 mb-4"> {/* Increase max-height */}
            <img src={project.image} alt={project.title} />
            <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
            <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
            <ul className="list-disc pl-6 mb-4">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-black text-designColor border border-designColor-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-designColor-600 hover:border-designColor-600 focus:outline-none focus:bg-gray-800 focus:text-red-600 focus:border-red-600">
              <FaGithub className="mr-1" /> GitHub Link
            </a>
            <button onClick={onClose} className="flex items-center  bg-black text-designColor border border-designColor-500 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-designColor-600 hover:border-designColor-600 focus:outline-none focus:bg-gray-800 focus:text-red-600 focus:border-red-600">
              <FaTimes className="mr-1" /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
