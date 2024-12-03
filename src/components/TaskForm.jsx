import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Media');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, dueDate, priority, completed: false });
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Media');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título"
        required
        style={{ width: '100%', padding: '10px', margin: '5px 0', border: 'none', borderRadius: '4px' }}
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descripción"
        required
        style={{ width: '100%', padding: '10px', margin: '5px 0', border: 'none', borderRadius: '4px' }}
      ></textarea>
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        placeholder="Fecha de Vencimiento"
        style={{ width: '100%', padding: '10px', margin: '5px 0', border: 'none', borderRadius: '4px' }}
      />
      <select 
        className="task-priority" 
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', margin: '5px 0', border: 'none', borderRadius: '4px', backgroundColor: '#fff', color: '#000' }}
      >
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
      <button 
        type="submit"
        style={{ backgroundColor: '#61dafb', color: '#20232a', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }}
      >Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;







