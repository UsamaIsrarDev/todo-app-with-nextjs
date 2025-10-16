"use client";

import { useRouter } from "next/navigation";
import { memo, useState } from "react";

async function addTodo(name, refresh) {
  await fetch("/api/todo", {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

const AddTodo = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default memo(AddTodo);
