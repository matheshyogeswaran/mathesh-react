import React from 'react';
import { FaGlobe } from "react-icons/fa";

const BlogsCard = ({ title, des, link }) => {
  // Function to extract thumbnail image from HTML description
  const extractThumbnail = (description) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : null;
  };
  
  // Extract thumbnail image from description
  const thumbnail = extractThumbnail(des);
  
  const extractDescription = (description) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const pElement = doc.querySelector('p');
    let extractedText = pElement ? pElement.textContent.trim() : null;
    // Truncate to 100 characters
    if (extractedText && extractedText.length > 100) {
      extractedText = extractedText.substring(0, 100) + '...';
    }
    return extractedText;
  };
  
  const truncatedDescription = extractDescription(des);

  // Truncate title to show only the first 50 characters
  const truncatedTitle = title.length > 50 ? title.substring(0, 50) + "..." : title;

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {thumbnail && <img className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer" src={thumbnail} alt={title} />}
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">{truncatedTitle}</h3>
            <div className="flex gap-2">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <FaGlobe />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{truncatedDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
