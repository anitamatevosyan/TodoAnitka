import { FC, useState } from 'react';
import { TaskFilter } from './types';
import { StyleFilterButtons, StyleFilterButtonsBlock } from './Styled';

type Props = {
  setFilter: React.Dispatch<TaskFilter>;
  filter: TaskFilter;
};

export const FilterButtons: FC<Props> = ({ setFilter, filter }) => {
  // const [activeButton, setActiveButton] = useState(TaskFilter.ALL);
  return (
    <StyleFilterButtonsBlock>
      <StyleFilterButtons
        active={filter === TaskFilter.ALL}
        onClick={() => {
          setFilter(TaskFilter.ALL);
          // setActiveButton(TaskFilter.ALL);
        }}
      >
        All Tasks
      </StyleFilterButtons>
      <StyleFilterButtons
        active={filter === TaskFilter.DONE}
        onClick={() => {
          setFilter(TaskFilter.DONE);
          // setActiveButton(TaskFilter.DONE);
        }}
      >
        Mission Complete
      </StyleFilterButtons>
      <StyleFilterButtons
        active={filter === TaskFilter.NOT_DONE}
        onClick={() => {
          setFilter(TaskFilter.NOT_DONE);
          // setActiveButton(TaskFilter.NOT_DONE);
        }}
      >
        Mission Failed
      </StyleFilterButtons>
    </StyleFilterButtonsBlock>
  );
};
