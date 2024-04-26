import { useState } from 'react';
import { Todo } from './Todo';
import { Input } from './Input';
import { FilterButtons } from './FilterButtons';
import { Task, TaskFilter } from './types';
import { FilterTasks } from './helpers';
import { v4 as uuidv4 } from 'uuid';

export const TodoBox = () => {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('todolist') || '[]'));
  const [filter, setFilter] = useState(TaskFilter.ALL);

  const filteredTasks = FilterTasks(tasks, filter);

  const deleteTask = (id: string) => {
    const filtered = tasks.filter((el) => el.id !== id);
    setTasks(filtered);
    localStorage.setItem('todolist', JSON.stringify(filtered));
  };

  const editTask = (task: Task) => {
    const newTasks = tasks.map((el) => {
      if (el.id === task.id) {
        return task;
      } else {
        return el;
      }
    });
    setTasks(newTasks);
    localStorage.setItem('todolist', JSON.stringify(newTasks));
  };

  const addTask = (title: string) => {
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

  const newTodo = filteredTasks.map((task) => {
    return <Todo key={task.id} task={task} deleteTask={deleteTask} editTask={editTask}></Todo>;
  });
  return (
    <>
      <Input addTask={addTask} />
      <div>{newTodo.length} Задачи</div>
      <FilterButtons setFilter={setFilter} />
      {filteredTasks.length === 0 ? 'У вас пока нет задач, добавите первую!' : newTodo}
    </>
  );
};
