import React from 'react';
import { useTasks } from '../contexts/TaskContext'; // Import the custom hook
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline'; // Example icons

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion, deleteTask } = useTasks(); // Get functions from context

  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-3">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)} // Toggle completion on checkbox change
          className="form-checkbox h-5 w-5 text-blue-600 rounded-md focus:ring-blue-500 cursor-pointer"
        />
        <span
          className={`ml-4 text-lg ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {task.text}
        </span>
      </div>
      <div className="flex gap-2">
        {/* Optional: Add a checkmark icon for visual confirmation if not using checkbox */}
        {/* {task.completed && (
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        )} */}
        <button
          onClick={() => deleteTask(task.id)} // Delete task on button click
          className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="Delete task"
        >
          <TrashIcon className="h-6 w-6" /> {/* Heroicons example */}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
