import React from 'react';
import TaskItem from './TaskItem'; // Import the individual task item component
import { useTasks } from '../contexts/TaskContext'; // Import the custom hook

const TaskList = () => {
  const { tasks } = useTasks(); // Get the tasks array from context

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-4">No tasks yet! Add one above.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} /> // Render each task item
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
