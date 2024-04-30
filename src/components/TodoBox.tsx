import { useState } from 'react';
import { Todo } from './Todo';
import { Input } from './Input';
import { FilterButtons } from './FilterButtons';
import { Task, TaskFilter } from './types';
import { FilterTasks } from './helpers';
import { v4 as uuidv4 } from 'uuid';

export const TodoBox = () => {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('todolist') || '[]'));
  const [filter, setFilter] = useState<TaskFilter>(TaskFilter.ALL);

  const filteredTasks = FilterTasks(tasks, filter);

  const addTask = (title: string) => {
    if (title.trim().length === 0) {
      alert('там пусто, дурак!');
      return;
    }
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        completed: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem('todolist', JSON.stringify(newTasks));
  };

  const todoCounter = () => {
    return `${filteredTasks.length} ${filteredTasks.length > 1 ? 'Tasks' : 'Task'}`;
  };
  return (
    <>
      <Input addTask={addTask} />
      {todoCounter}
      <FilterButtons setFilter={setFilter} filter={filter} />
      {filteredTasks.length === 0
        ? 'У вас пока нет задач, добавите первую!'
        : filteredTasks.map((task) => {
            return <Todo key={task.id} task={task} tasks={tasks} setTasks={setTasks}></Todo>;
          })}
    </>
  );
};
