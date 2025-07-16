// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = ({ posts }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0 ? (
          <p className="text-lg text-gray-600 col-span-full text-center">Loading posts...</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Link to={`/post/${post.id}`} className="block">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2 hover:text-blue-800">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
              <p className="text-sm text-gray-500">By: {post.author}</p>
              <Link
                to={`/post/${post.id}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Read More
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
