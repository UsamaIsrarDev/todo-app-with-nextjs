"use client";

import { useRouter } from "next/navigation";
import { memo } from "react";

interface TodoInter {
  id: number;
  name: string;
  isDone: boolean;
}

const update = async (id, isDone, refresh) => {
  await fetch("/api/", {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
};

async function deleteTodo(id, refresh) {
  await fetch("/api/", {
    method: "DELETE",
  });

  refresh();
}

const Todo = ({ todo }: { todo: TodoInter }) => {
  const router = useRouter();

  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => {
          update(todo.id, e.target.checked, router.refresh);
        }}
        checked={todo.isDone}
      />
      {todo?.name}
      <button
        onClick={() => {
          deleteTodo(todo.id, router.refresh);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default memo(Todo);
