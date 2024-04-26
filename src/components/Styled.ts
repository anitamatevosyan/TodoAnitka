import styled from 'styled-components';

const StyleTodo = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid pink;
  width: 300px;
  min-height: 60px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  align-items: center;
`;

const StyleBtnTodo = styled.button`
  font-family: 'Sedan', serif;
  transition: 0.2s linear;
  border: 0;
  background: none;
`;
const StyleTextTodo = styled.p`
  font-family: 'Sedan', serif;
  overflow: hidden;
  max-width: 470px;
  text-overflow: ellipsis;
`;
const StyleBtn = styled.button`
  font-family: 'Sedan', serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: #ffffff;
  transition: 0.2s linear;
  background: #d795b2;
`;

const StyleInput = styled.input`
  font-family: 'Sedan', serif;
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid pink;
  border-radius: 4px;
`;
const StyleFilterButtons = styled.button`
  font-family: 'Sedan', serif;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  color: #ffffff;
  transition: 0.2s linear;
  background: #d795b2;
  margin: 0.5rem;
`;
const StyleFilterButtonsBlock = styled.div`
  display: flex;
`;
export {
  StyleTodo,
  StyleBtnTodo,
  StyleTextTodo,
  StyleBtn,
  StyleInput,
  StyleFilterButtons,
  StyleFilterButtonsBlock,
};
