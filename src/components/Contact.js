import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white p-8 text-center sm:text-left">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 bg-gray-700 border border-gray-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 bg-gray-700 border border-gray-600"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 bg-gray-700 border border-gray-600 h-32"
        />
        <button className="p-2 bg-blue-500 hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
};

export default Contact;
