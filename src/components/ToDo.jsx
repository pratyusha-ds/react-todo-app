import { useState } from "react";
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";
import "../App.css"; // Import the CSS file

const ToDo = () => {
  const [todos, setTodos] = useState([{ id: 0, title: "Example", done: true }]);

  // Calculate the next ID based on the maximum ID present in the list to prevent duplicates
  const getNextId = () => {
    const maxId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;
    return maxId + 1;
  };

  const addToDo = (title) => {
    const nextId = getNextId(); // Ensure unique ID for each new todo
    setTodos([
      ...todos,
      {
        id: nextId,
        title: title,
        done: false,
      },
    ]);
  };

  const editToDo = (nextTodo) => {
    setTodos(
      todos.map((todo) => todo.id === nextTodo.id ? nextTodo : todo)
    );
  };

  const deleteToDo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="container-fluid mt-5 text-center" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", padding: "0 15px" }}>
      <div className="row justify-content-center">
        <h1 className="text-center mb-4" style={{ fontSize: "64px" }}>ToDo App</h1>
        <div className="col-md-8">
          <div className="card border">
            <div className="card-body">
              <AddItem onAddItem={addToDo} />
              <ToDoList todos={todos} onChangeToDo={editToDo} onDeleteToDo={deleteToDo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
