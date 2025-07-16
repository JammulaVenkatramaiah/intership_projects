// src/components/PostDetailPage.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

const PostDetailPage = ({ posts }) => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Find the post based on the ID from URL parameters
  const post = posts.find(p => p.id === id);

  // useEffect to update document title when the post data or ID changes
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - React Blog`;
    } else {
      document.title = 'Post Not Found - React Blog';
    }
    // Cleanup function: reset document title when component unmounts or ID changes
    return () => {
      document.title = 'React Blog App';
    };
  }, [id, post]); // Re-run effect if 'id' or 'post' object changes

  if (!post) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg m-6 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Post Not Found</h2>
        <p className="text-lg text-gray-700">The blog post you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')} // Navigate back to home page
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg m-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">By: {post.author}</p>
      <div className="prose lg:prose-lg text-gray-800 leading-relaxed">
        <p>{post.content}</p>
        <p className="mt-4 text-gray-700">
          This is a detailed view of the blog post. Here you would typically find more extensive content,
          images, and perhaps a comment section or related articles.
        </p>
      </div>
      <button
        onClick={() => navigate('/')} // Navigate back to home page
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PostDetailPage;
