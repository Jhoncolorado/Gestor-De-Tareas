import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (taskToToggle) => {
    setTasks(tasks.map(task => 
      task === taskToToggle ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  const pendingTasksCount = () => {
    return tasks.filter(task => !task.completed).length;
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, removeTask, pendingTasksCount }}>
      {children}
    </TaskContext.Provider>
  );
};


