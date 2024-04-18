import { useState } from "react";
import PropTypes from "prop-types";

const ToDoTask = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    if (title.trim() !== "") {
      onChange({ ...task, title });
      setIsEditing(false);
    }
  };

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => onChange({ ...task, done: e.target.checked })}
      />
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={handleTitleChange}
            onBlur={handleSave}
            autoFocus
          />
          <button onClick={handleSave} disabled={title.trim() === ""}>
            Save
          </button>
        </>
      ) : (
        <>
          {task.title}
          <button onClick={handleToggleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {title.trim() === "" && <p>Task cannot be empty.</p>}
    </label>
  );
};

ToDoTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ToDoTask;
