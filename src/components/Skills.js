import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 text-white p-8 text-center sm:text-left">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li>Java</li>
        <li>React.js</li>
        <li>Spring Boot</li>
        <li>MySQL</li>
        <li>Tailwind CSS</li>
      </ul>
    </section>
  );
};

export default Skills;
