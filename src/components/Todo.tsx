import { FC, useState } from 'react';
import { Task } from './types';
import { StyleTodo, StyleBtnTodo, StyleTextTodo } from './Styled';
import { AiOutlineDelete, AiFillEdit, AiOutlineSave } from 'react-icons/ai';

type Props = {
  task: Task;
  deleteTask: (id: string) => void;
  editTask: (task: Task) => void;
};
export const Todo: FC<Props> = ({ task, deleteTask, editTask }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(task);

  const EditClick = () => {
    setEdit(true);
  };
  const SaveClick = () => {
    editTask(value);
    setEdit(false);
  };
  const checkboxClick = () => {
    const newTask = {
      ...value,
      completed: !value.completed,
    };
    setValue(newTask);
    editTask(newTask);
  };

  const onInputChange = (newTitle: string) => {
    setValue((prev) => {
      return {
        ...prev,
        title: newTitle,
      };
    });
  };

  return (
    <StyleTodo>
      <input onClick={checkboxClick} type='checkbox' defaultChecked={value.completed} />
      {edit ? (
        <input
          value={value.title}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
      ) : (
        <StyleTextTodo>{value.title}</StyleTextTodo>
      )}

      <div>
        {edit ? (
          <StyleBtnTodo onClick={SaveClick}>
            <AiOutlineSave size={25} color='rgb(215, 149, 178)' />
          </StyleBtnTodo>
        ) : (
          <StyleBtnTodo onClick={EditClick}>
            <AiFillEdit size={25} color='rgb(215, 149, 178)' />
          </StyleBtnTodo>
        )}

        <StyleBtnTodo onClick={() => deleteTask(value.id)}>
          <AiOutlineDelete size={25} color='rgb(215, 149, 178)' />
        </StyleBtnTodo>
      </div>
    </StyleTodo>
  );
};
