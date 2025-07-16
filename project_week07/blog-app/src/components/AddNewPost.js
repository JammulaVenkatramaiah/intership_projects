// src/components/AddNewPost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Helper function to generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

const AddNewPost = ({ onAddPost }) => {
  // useState hooks for managing form input values
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    if (!title || !content || !author) {
      alert('Please fill in all fields to add a new post.'); // Using alert for simplicity, consider a custom modal in production
      return;
    }

    const newPost = {
      id: generateId(), // Generate a unique ID for the new post
      title,
      content,
      author,
    };

    onAddPost(newPost); // Call the function passed from parent to add the new post

    // Clear form fields after submission
    setTitle('');
    setContent('');
    setAuthor('');

    navigate('/'); // Navigate back to the home page after adding the post
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg m-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Add New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state on change
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="postContent" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="postContent"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)} // Update content state on change
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Write your blog post content here..."
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="postAuthor" className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            id="postAuthor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} // Update author state on change
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Name"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
