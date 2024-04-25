// components/TaskItem.tsx

import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onCompleteTask: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onCompleteTask, onRemoveTask }) => {
  const handleCompleteTask = () => {
    onCompleteTask(task.id);
  };

  const handleRemoveTask = () => {
    onRemoveTask(task.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCompleteTask}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleRemoveTask}>Remover</button>
    </div>
  );
};

export default TaskItem;
