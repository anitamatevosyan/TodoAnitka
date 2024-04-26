import { useState } from 'react';
import { FC } from 'react';
import { StyleBtn, StyleInput } from './Styled';

type Props = {
  addTask: (title: string) => void;
};

export const Input: FC<Props> = (props) => {
  const [text, setText] = useState('');
  return (
    <>
      <StyleInput
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Заполни меня....'
      />
      <StyleBtn onClick={() => props.addTask(text)}>Add</StyleBtn>
    </>
  );
};
