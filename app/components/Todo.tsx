"use client";

import { memo } from "react";

interface TodoInter {
  id: number;
  name: string;
  isDone: boolean;
}

const update = async ({ id, isDone }) => {
  await fetch("", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
};

const Todo = ({ todo }: { todo: TodoInter }) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => {
          update(todo.id, e.target.checked);
        }}
        checked={todo.isDone}
      />
      {todo?.name}
      <button>Delete</button>
    </>
  );
};

export default memo(Todo);
