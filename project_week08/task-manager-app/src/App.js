import React from 'react';
import { TaskProvider } from './contexts/TaskContext'; // Import the TaskProvider
import TaskForm from './components/TaskForm'; // Import TaskForm
import TaskList from './components/TaskList'; // Import TaskList
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

function App() {
  return (
    // Wrap the entire application with ErrorBoundary to catch UI errors
    <ErrorBoundary>
      {/* Wrap the main content with TaskProvider to make task state available */}
      <TaskProvider>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
              Task Manager
            </h1>
            <TaskForm /> {/* Render the TaskForm component */}
            <TaskList /> {/* Render the TaskList component */}
          </div>
        </div>
      </TaskProvider>
    </ErrorBoundary>
  );
}

export default App;
