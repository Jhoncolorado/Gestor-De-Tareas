import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks, toggleTaskCompletion, removeTask } = useContext(TaskContext);
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;


