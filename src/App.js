import React, {useState} from "react";
import './App.css';
import TodoTable from "./components/TodoTable";
import NewTodoFrom from "./components/NewTodoFrom";

function App() {

  const [todos, setTodos] = useState([
      {rowNumber: 1, rowDescription: "Kilicdari Lincle", rowAssigned: "Jahrein"},
      {rowNumber: 2, rowDescription: "Maklube pisir", rowAssigned: "Ali Babacan"},
      {rowNumber: 3, rowDescription: "Tayibbi sik", rowAssigned: "User Three"},
      {rowNumber: 4, rowDescription: "Surileri Oldur", rowAssigned: "Umit Ozdag"},
  ])

    const addTodo = (description, assigned) => {
        if (todos.length > 0) {
            const newTodo = {
                rowNumber: todos.length + 1,
                rowDescription: description,
                rowAssigned: assigned
            }
            setTodos(todos => [...todos, newTodo])
        }
    }

  return (
    <div className={"mt-5 container"}>
      <div className={"card"}>
        <div className={"card-header"}>
            <h1>Sikilen Siyasetciler</h1>
        </div>
        <div className={"card-body"}>
            <TodoTable todos={todos}/>
            <button className={"btn btn-primary"} onClick={addTodo}>
                Add new todo
            </button>
            <NewTodoFrom addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
