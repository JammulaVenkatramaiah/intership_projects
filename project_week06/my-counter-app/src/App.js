import React, { useState } from 'react';

// Main App component for the counter application
const App = () => {
  // State variable to hold the current count, initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to reset the count to its initial value (0)
  const reset = () => {
    setCount(0);
  };

  return (
    // Outer container: full screen height, centered content, light gray background, padding
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      {/* Inner card container: white background, padding, rounded corners, shadow, border, max-width */}
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-sm">
        {/* Title of the application */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Counter App
        </h1>

        {/* Display for the current count */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-7xl font-bold text-indigo-600">
            {count}
          </span>
        </div>

        {/* Buttons for incrementing, decrementing, and resetting the count */}
        {/* Flex column layout for buttons, with vertical spacing */}
        <div className="flex flex-col space-y-4">
          {/* Row for Increment and Decrement buttons, with horizontal spacing */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={decrement}
              // Styling for Decrement button: red background, white text, rounded, shadow, hover/focus effects, flex-1 for equal width
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 flex-1"
            >
              Decrement
            </button>
            <button
              onClick={increment}
              // Styling for Increment button: green background, white text, rounded, shadow, hover/focus effects, flex-1 for equal width
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 flex-1"
            >
              Increment
            </button>
          </div>
          <button
            onClick={reset}
            // Styling for Reset button: blue background, white text, rounded, shadow, hover/focus effects, full width
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 w-full"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
