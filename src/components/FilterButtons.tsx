import { FC, useState } from 'react';
import { TaskFilter } from './types';
import { StyleFilterButtons, StyleFilterButtonsBlock } from './Styled';

type Props = {
  setFilter: React.Dispatch<TaskFilter>;
};

export const FilterButtons: FC<Props> = ({ setFilter }) => {
  return (
    <StyleFilterButtonsBlock>
      <StyleFilterButtons onClick={() => setFilter(TaskFilter.ALL)}>All Tasks</StyleFilterButtons>
      <StyleFilterButtons onClick={() => setFilter(TaskFilter.DONE)}>
        Mission Complete
      </StyleFilterButtons>
      <StyleFilterButtons onClick={() => setFilter(TaskFilter.NOT_DONE)}>
        Mission Failed
      </StyleFilterButtons>
    </StyleFilterButtonsBlock>
  );
};
