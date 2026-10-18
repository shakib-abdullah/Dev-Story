import React from 'react';

import { 
  FaGithub, 
  FaLinkedin, 
  FaGlobe, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGraduationCap, 
  FaBriefcase, 
  FaStar 
} from 'react-icons/fa';

const DeveloperDetailsCard = ({ developer }) => {
  const {
    name,
    designation,
    company,
    email,
    phone,
    age,
    gender,
    location,
    experience_years,
    education,
    image,
    github,
    linkedin,
    portfolio,
    skills,
    hourly_rate,
    availability,
    rating,
    story,
  } = developer;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 my-8 font-sans">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Sidebar / Profile Section */}
        <div className="md:w-1/3 bg-slate-900 text-white p-6 flex flex-col items-center text-center justify-between">
          <div className="flex flex-col items-center w-full">
            <div className="relative mb-4">
              <img
                src={image}
                alt={name}
                className="w-32 h-32 mt-5 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              />
              <span className="absolute bottom-1 right-1 bg-amber-400 text-slate-900 font-bold text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                <FaStar className="text-slate-900" /> {rating}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <br />
            <p className="text-indigo-400 font-medium text-sm mt-1">{designation}</p>
            <p className="text-gray-400 text-xs mt-0.5">{company}</p>

            <div className="mt-3 inline-block bg-indigo-950 text-indigo-300 text-xs px-3 py-1 rounded-full font-semibold border border-indigo-800">
              {availability} • ${hourly_rate}/hr
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full mt-6 pt-6 border-t border-slate-800 text-left space-y-2.5 text-xs text-gray-300">
            <div className="flex items-center gap-2.5">
              <FaEnvelope className="text-indigo-400 text-sm shrink-0" />
              <span className="truncate">{email}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-indigo-400 text-sm shrink-0" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaMapMarkerAlt className="text-indigo-400 text-sm shrink-0" />
              <span>{location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-6 pt-4 border-t border-slate-800">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-full transition-colors text-white">
                <FaGithub size={16} />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-full transition-colors text-white">
                <FaLinkedin size={16} />
              </a>
            )}
            {portfolio && (
              <a href={portfolio} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-full transition-colors text-white">
                <FaGlobe size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Right Details Section */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between bg-white">
          <div>
            {/* Quick Overview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <div>
                <span className="text-xs text-gray-400 font-medium block">Experience</span>
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
                  <FaBriefcase className="text-indigo-500 text-xs" /> {experience_years} Years
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block">Age / Gender</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                  {age} Yrs, {gender}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-xs text-gray-400 font-medium block">Education</span>
                <span className="text-xs font-semibold text-slate-800 flex items-center gap-1 mt-0.5 truncate" title={education}>
                  <FaGraduationCap className="text-indigo-500 text-sm shrink-0" /> {education}
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Technical Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-md border border-indigo-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Story / About */}
            <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">About & Story</h3>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                {story}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow transition-all duration-200">
              Hire Developer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeveloperDetailsCard;