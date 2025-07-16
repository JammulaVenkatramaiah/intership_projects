// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PostDetailPage from './components/PostDetailsPage';
import AddNewPost from './components/AddNewPost';

// Import mock data
import initialBlogPosts from './data/blogPosts';

const App = () => {
  // useState to manage the list of blog posts
  const [posts, setPosts] = useState([]);

  // useEffect to simulate fetching initial blog posts data
  // This runs once when the component mounts (due to empty dependency array [])
  useEffect(() => {
    // Simulate an API call delay
    const timer = setTimeout(() => {
      setPosts(initialBlogPosts);
    }, 500); // 500ms delay to simulate network latency

    // Cleanup function: clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Function to add a new post to the state
  const handleAddPost = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  return (
    // BrowserRouter wraps the entire application to enable routing
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold mb-2 md:mb-0">React Blog</Link>
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              <Link
                to="/"
                className="px-4 py-2 rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/add-post"
                className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
              >
                Add New Post
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="container mx-auto my-8 p-4">
          {/* Routes component defines the routing rules */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<HomePage posts={posts} />} />
            {/* Route for the About page */}
            <Route path="/about" element={<AboutPage />} />
            {/* Route for the Contact page */}
            <Route path="/contact" element={<ContactPage />} />
            {/* Route for individual blog post details, using a URL parameter ':id' */}
            <Route path="/post/:id" element={<PostDetailPage posts={posts} />} />
            {/* Route for adding a new post */}
            <Route path="/add-post" element={<AddNewPost onAddPost={handleAddPost} />} />
            {/* Fallback route for any unmatched paths (optional) */}
            <Route path="*" element={
              <div className="p-6 bg-white rounded-lg shadow-lg m-6 text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
                <p className="text-lg text-gray-700">The page you are looking for does not exist.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                  Go to Home
                </Link>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center mt-8">
          <p>&copy; {new Date().getFullYear()} React Blog App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
