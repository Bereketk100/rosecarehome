import React from 'react';

const ProgramCard = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-sky-500">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="w-5 h-5 text-sky-500 mt-1 mr-3 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCard;
