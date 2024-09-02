import React from 'react';

const MyWork = () => {
  return (
    <section id="work" className="bg-gray-100 p-8 text-center sm:text-left">
      <h2 className="text-3xl font-bold mb-4">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Description of the project and the technologies used...</p>
        </div>
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>Description of the project and the technologies used...</p>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
