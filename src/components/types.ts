type Task = {
  id: string;
  title: string;
  completed: boolean;
};

enum TaskFilter {
  ALL = 'all',
  DONE = 'done',
  NOT_DONE = 'notDone',
}

export { type Task, TaskFilter };
