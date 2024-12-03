import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const PendingTasks = () => {
  const { pendingTasksCount } = useContext(TaskContext);

  return (
    <div>
      <h2>Tareas Pendientes: {pendingTasksCount()}</h2>
    </div>
  );
};

export default PendingTasks;
