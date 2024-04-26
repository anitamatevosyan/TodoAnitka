import { Task, TaskFilter } from './types';

export const FilterTasks = (tasks: Task[], filter: TaskFilter) => {
  switch (filter) {
    case TaskFilter.ALL:
      return tasks;
    case TaskFilter.DONE:
      return tasks.filter((task) => task.completed);
    case TaskFilter.NOT_DONE:
      return tasks.filter((task) => !task.completed);
  }
};
