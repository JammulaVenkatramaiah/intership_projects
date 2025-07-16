// src/components/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg m-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        Have questions, feedback, or just want to say hello? Feel free to reach out using the form below!
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows="5"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
