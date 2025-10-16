import { memo } from "react";

const AddTodo = () => {
  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default memo(AddTodo);
