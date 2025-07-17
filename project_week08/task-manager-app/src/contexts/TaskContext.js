import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Task Context
export const TaskContext = createContext();

// Create the Task Provider component
export const TaskProvider = ({ children }) => {
  // State to hold the list of tasks
  // Initialize from local storage if available, otherwise an empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Effect to save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (text) => {
    if (text.trim()) { // Ensure the task text is not empty
      const newTask = {
        id: Date.now(), // Unique ID for the task
        text,
        completed: false, // New tasks are not completed by default
      };
      setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the list
    }
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // The value provided by the context to its consumers
  const contextValue = {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children} {/* Render child components that consume this context */}
    </TaskContext.Provider>
  );
};

// Custom hook to easily consume the TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    // This check ensures useTasks is called within a TaskProvider
    console.error('useTasks must be used within a TaskProvider');
    // For production, you might throw an error or return a default state
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
