import React, { useState } from 'react';
import { useTasks } from '../contexts/TaskContext'; // Import the custom hook

const TaskForm = () => {
  const [taskText, setTaskText] = useState(''); // State for the input field
  const { addTask } = useTasks(); // Get the addTask function from context

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addTask(taskText); // Add the task using the context function
    setTaskText(''); // Clear the input field after adding
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Update state on input change
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
