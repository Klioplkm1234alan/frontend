import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavComp = ({ children, svg, ln }) => {
  return (
    <NavLink
      to={ln}
      className={({ isActive }) =>
        `group rounded-xl py-2 px-4 flex flex-col items-center justify-center transition-all duration-200
        ${isActive ? 'bg-blue-50 text-blue-500' : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 transition-colors duration-200"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d={svg} />
      </svg>
      <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold transition-colors duration-200">
        {children}
      </p>
    </NavLink>
  );
};

export default BottomNavComp;
