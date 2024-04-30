import { FC, useState } from 'react';
import { Task } from './types';
import { StyleTodo, StyleBtnTodo, StyleTextTodo } from './Styled';
import { AiOutlineDelete, AiFillEdit, AiOutlineSave } from 'react-icons/ai';

type Props = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<Task[]>;
};
export const Todo: FC<Props> = ({ task, setTasks, tasks }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(task.title);

  const deleteTask = (id: string) => {
    const filtered = tasks.filter((el) => el.id !== id);
    setTasks(filtered);
    localStorage.setItem('todolist', JSON.stringify(filtered));
  };

  const editClick = () => {
    setIsEdit(true);
  };
  const saveClick = () => {
    const updatedTasks = tasks.map((el) => {
      if (el.id != task.id) return el;
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('todolist', JSON.stringify(updatedTasks));
    setIsEdit(false);
  };

  const checkboxClick = () => {
    const newTask = {
      ...task,
      completed: !task.completed,
    };
    setTasks(
      tasks.map((task) => {
        if (newTask.id === task.id) {
          return newTask;
        }
        return task;
      })
    );
  };

  return (
    <StyleTodo>
      <input onClick={checkboxClick} type='checkbox' defaultChecked={task.completed} />
      {isEdit ? (
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      ) : (
        <StyleTextTodo>{task.title}</StyleTextTodo>
      )}

      <div>
        {isEdit ? (
          <StyleBtnTodo onClick={saveClick}>
            <AiOutlineSave size={25} color='rgb(215, 149, 178)' />
          </StyleBtnTodo>
        ) : (
          <StyleBtnTodo onClick={editClick}>
            <AiFillEdit size={25} color='rgb(215, 149, 178)' />
          </StyleBtnTodo>
        )}

        <StyleBtnTodo onClick={() => deleteTask(task.id)}>
          <AiOutlineDelete size={25} color='rgb(215, 149, 178)' />
        </StyleBtnTodo>
      </div>
    </StyleTodo>
  );
};
