import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../constants/projectsData";
import { FaGithub, FaExternalLinkAlt, FaDownload, FaInfoCircle } from "react-icons/fa";

const ProjectDetailsPage = () => {
  const { id } = useParams(); // Get project ID from URL
  const navigate = useNavigate(); // For navigation
  const project = projectsData.find((p) => p.id === parseInt(id)); // Find project by ID

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Runs only once when the component is mounted

  // Handle invalid project
  if (!project) {
    return <h1 className="text-center text-2xl">Project not found</h1>;
  }

  return (
    <div className="w-full py-10 px-4 lg:px-16">
      {/* Back Button */}
      <button
        className="mb-6 text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-designColor transition duration-300"
        onClick={() => navigate(-1)}
      >
        Back to Projects
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-4">
            {project.downloadLink && (
              <a
                href={project.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-designColor transition duration-300"
              >
                <FaDownload /> Download
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-designColor transition duration-300"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-designColor transition duration-300"
              >
                <FaInfoCircle /> More Info
              </a>
            )}
          </div>
        </div>

        {/* Full-Width Image */}
        <div className="w-full mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Overview */}
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg text-gray-400 mb-6">{project.description}</p>

        {/* Features */}
        {project.features && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 mb-6 text-gray-400 space-y-3">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {/* Technologies */}
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm bg-gray-800 text-white rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Challenges */}
        {project.challenges && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Challenges & Learnings</h2>
            <p className="text-lg text-gray-400 mb-6">{project.challenges}</p>
          </>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-designColor transition duration-300"
            >
              <FaGithub /> GitHub Repo
            </a>
          )}
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-designColor transition duration-300"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
