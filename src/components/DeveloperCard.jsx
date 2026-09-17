'use client'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

export const DeveloperCard = ({ developer }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        console.log(textRef);
        const el = textRef.current;
        if(el){
            setIsOverflowing(el.scrollHeight > el.clientHeight);
        }
    }, [developer.story]);

  return (
    <div className="bg-white mt-3 mx-[30px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col justify-between">
      <div>
        {/* Header Section with Image */}
        <div className="flex items-center space-x-4 mb-4">
          {/* <img 
            src={developer.image} 
            alt={developer.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-sm"
          /> */}
          <Image
            src={developer.image} 
            alt={developer.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-sm"
            width={140}
            height={140}
            loading="lazy"
          ></Image>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{developer.name}</h3>
            <p className="text-sm font-medium text-indigo-600">{developer.designation}</p>
            <p className="text-xs text-gray-500">{developer.company} • {developer.experience} exp</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Skills</h4>
          <div className="flex flex-wrap gap-1.5">
            {developer.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Story</h4>
          <p 
          ref={textRef}
          className={`text-sm text-gray-600 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {developer.story}
          </p>
        </div>
      </div>

      {/* Read More / Read Less Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 self-start focus:outline-none transition-colors mt-2"
      >
        {isExpanded ? 'Show Less ▲' : 'See more ▼'}
      </button>
    </div>
  );
};

