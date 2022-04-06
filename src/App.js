import { useState } from "react";
import { v4 as uid } from "uuid";
import "./App.css";
import Input from "./component/Input";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  console.log(todos);

  const onClickHandler = () => {
    if (!inputValue) {
      return;
    }
    setTodos((prev) => [...prev, { todo: inputValue, id: uid() }]);
    setInputValue("");
  };

  const deleteButtonClick = (e) => {
    setTodos(todos.filter((todo) => todo.id !== e.target.id));

    // setTodos();
  };
  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={onChangeHandler}
        placeholder="Write..."
      />
      <button onClick={onClickHandler} type="button">
        Submit
      </button>
      <ul>
        {todos.map((item, index) => (
          <>
            <li id={item.id} key={index}>
              {item.todo}
            </li>
            <button onClick={deleteButtonClick} id={item.id}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
