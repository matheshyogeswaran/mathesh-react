import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({ id, title, des, src }) => {
  // Truncate description to 50 characters
  const truncatedDes = des.length > 75 ? des.substring(0, 75) + "..." : des;

  return (
    <Link to={`/project/${id}`}>
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt={title}
          />
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          {/* Display truncated description */}
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {truncatedDes}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
