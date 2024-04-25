// components/TaskList.tsx

import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask, onRemoveTask }) => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
