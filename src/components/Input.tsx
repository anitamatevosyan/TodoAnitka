import { useState } from 'react';
import { FC } from 'react';
import { StyleBtn, StyleInput } from './Styled';

type Props = {
  addTask: (title: string) => void;
};

export const Input: FC<Props> = ({ addTask }) => {
  const [text, setText] = useState('');
  return (
    <>
      <StyleInput
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Заполни меня....'
      />
      <StyleBtn onClick={() => addTask(text)}>Add</StyleBtn>
    </>
  );
};
