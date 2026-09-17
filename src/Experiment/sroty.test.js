
'use client'

import React, { useState, useRef, useEffect } from 'react';

export const DeveloperCard = ({ developer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    console.log(textRef);
    const el = textRef.current;
    if (el) {
      // scrollHeight > clientHeight mane text clamp howar karone hidden hocche
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [developer.story]);

  return (
    <div className="bg-white mt-3 mx-7.5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col justify-between">
      
        {/* ... header, skills section same thakbe ... */}

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Story</h4>
          <p
            ref={textRef}
            className={`text-sm text-gray-600 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}
          >
            {developer.story}
          </p>
        </div>


      {/* Button shudhu takhon show hobe jokhon text ta truly overflow kore, othoba already expanded thake */}
      {(isOverflowing || isExpanded) && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 self-start focus:outline-none transition-colors mt-2"
        >
          {isExpanded ? 'Show Less ▲' : 'See more ▼'}
        </button>
      )}
    </div>
  );
};