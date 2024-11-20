import React from 'react';

const Skill = () => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">My Skills</h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        <li className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition">
          HTML + CSS
        </li>
        <li className="px-4 py-2 text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition">
          JavaScript
        </li>
        <li className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
          Web Design
        </li>
        <li className="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition">
          Git and Github
        </li>
        <li className="px-4 py-2 text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-600 transition">
          React
        </li>
        <li className="px-4 py-2 text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition">
          Tailwind CSS
        </li>
      </ul>
    </div>
  );
};

export default Skill;
