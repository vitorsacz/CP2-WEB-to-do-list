// pages/index.tsx

import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskItem from '../components/TaskItem';
import "./../public/css/todo.css"

const IndexPage: React.FC = () => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Fazer compras', completed: false },
    { id: 2, text: 'Estudar para prova', completed: false },
    { id: 3, text: 'Limpar o quarto', completed: false },
  ]);

  // Estado para armazenar o texto da nova tarefa
  const [newTaskText, setNewTaskText] = useState('');

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskText(''); // Limpa o texto do input
    }
  };

  // Função para marcar uma tarefa como concluída
  const completeTask = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Função para remover uma tarefa
  const removeTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='container' >
      
      <div className='todo'>

        
        <TaskList
          tasks={tasks}
          onCompleteTask={completeTask}
          onRemoveTask={removeTask}
        />
        {/* Formulário para adicionar uma nova tarefa */}
        <input
          type="text"
          value={newTaskText}
          placeholder='insira sua nova tarefa'
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
};

export default IndexPage;
