import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css"; // Import the CSS file

const AddItem = ({ onAddItem }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddItem = () => {
    if (title.trim() !== "") {
      onAddItem(title);
      setTitle("");
    }
  };

  return (
    <div>
      <input
        placeholder="Add a new task"
        value={title}
        onChange={handleInputChange}
        style={{ width: "100%", padding: "15px", fontSize: "18px", border: "1px solid #ccc", marginBottom: "20px"}}
      />
     
      <button style={{ marginBottom: "20px"}}
  className="button"
  onClick={handleAddItem}
  disabled={title.trim() === ""}
>
  Add Task
</button>
    </div>
  );
};

AddItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default AddItem;
