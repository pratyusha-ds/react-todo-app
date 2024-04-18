import PropTypes from "prop-types";
import ToDoTask from "./ToDoTask";

const ToDoList = ({ todos, onChangeToDo, onDeleteToDo }) => {
  const completedTasks = todos.filter((todo) => todo.done).length;
  const totalTasks = todos.length;

  return (
    <>
      {totalTasks === 0 ? (
        <h4>No tasks</h4>
      ) : (
        <h4>
          Total number of tasks : {totalTasks}  <br /><br />
          {completedTasks} {completedTasks === 1 ? "task" : "tasks"}{" "}completed. 
          
        </h4>
      )}
      <ol>
        {todos.map((task) => (
          <li key={task.id}>
            <ToDoTask
              task={task}
              onChange={onChangeToDo}
              onDelete={onDeleteToDo}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChangeToDo: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
};

export default ToDoList;
