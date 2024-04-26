import { TodoBox } from './components/TodoBox';
import './App.css';
import { FcTodoList } from 'react-icons/fc';

function App() {
  return (
    <>
      <h1>
        ToDo List <FcTodoList size={40} />
      </h1>
      <TodoBox />
    </>
  );
}

export default App;
