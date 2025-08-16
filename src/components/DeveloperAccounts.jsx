import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperAccounts = ({ VB, PT, to }) => {
  return (
    <Link
      to={to}
      className="group p-2 rounded-full min-w-8 flex justify-center items-center
                 bg-gray-100 text-gray-500
                 hover:bg-blue-50 hover:text-blue-500 hover:-translate-y-1
                 active:translate-y-1
                 transition-all duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={VB}
        className="h-5 w-5 fill-current"
      >
        <path d={PT} />
      </svg>
    </Link>
  );
};

export default DeveloperAccounts;
