// src/components/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg m-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Our Blog</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to our React Blog App! This application is a hands-on project designed to illustrate the core concepts of React development, specifically focusing on client-side routing with **React Router** and effective state management using **React Hooks** (`useState` and `useEffect`).
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Our goal is to provide a clear and concise example of how these fundamental tools can be integrated to build a dynamic and responsive Single-Page Application (SPA). You can navigate between different sections, view individual blog posts, and even add new content, all without full page reloads.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        This project serves as a practical demonstration of modern React development practices.
      </p>
    </div>
  );
};

export default AboutPage;