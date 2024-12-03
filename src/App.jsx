import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import PendingTasks from './components/PendingTasks';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Gestor de Tareas</h1>
        <PendingTasks />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;









