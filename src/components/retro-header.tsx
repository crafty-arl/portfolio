import React from 'react';
import { FaHome, FaBriefcase, FaFolder, FaTools, FaPen } from 'react-icons/fa';

const RetroHeader = () => {
  return (
    <header className="fixed top-4 left-0 right-0 p-4 text-black z-40 w-full font-primary flex justify-center">
      <div className="flex space-x-4 p-2 border border-black bg-white">
        <div className="relative group">
          <a href="#home" className="text-black">
            <FaHome size={32} />
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 p-2 text-black text-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Home
          </div>
        </div>
        <div className="relative group">
          <a href="#work" className="text-black">
            <FaBriefcase size={32} />
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 p-2 text-black text-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Work
          </div>
        </div>
        <div className="relative group">
          <a href="#projects" className="text-black">
            <FaFolder size={32} />
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 p-2 text-black text-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Projects
          </div>
        </div>
        <div className="relative group">
          <a href="#tools" className="text-black">
            <FaTools size={32} />
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 p-2 text-black text-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Tools
          </div>
        </div>
        <div className="relative group">
          <a href="#notes" className="text-black">
            <FaPen size={32} />
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 p-2 text-black text-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Notes
          </div>
        </div>
      </div>
    </header>
  );
};

export default RetroHeader;