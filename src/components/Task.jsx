import React from 'react';

const Task = ({ task, toggleTaskCompletion, removeTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => toggleTaskCompletion(task)}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        {task.dueDate && <p>Vence: {new Date(task.dueDate).toLocaleDateString()}</p>}
        <p>Prioridad: {task.priority}</p>
      </div>
      <button onClick={() => removeTask(task)}>Eliminar</button>
    </div>
  );
};

export default Task;




