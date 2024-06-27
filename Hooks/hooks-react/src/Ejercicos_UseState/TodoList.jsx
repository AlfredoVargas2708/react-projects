import { useState } from "react";

const TodoList = () => {
  const [lista, setLista] = useState([]);
  const [tarea, setTarea] = useState("");

  const agregar = () => {
    if (tarea.trim()) {
      setLista((lista) => [...lista, tarea]);
      setTarea("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button onClick={agregar}> Add todo </button>
      <ul>
        {lista.map((task, index) => (
          <li key={index}>
            {" "}
            {task}{" "}
            <button
              onClick={() => setLista(lista.filter((_, i) => i !== index))}
            >
              {" "}
              Delete{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
