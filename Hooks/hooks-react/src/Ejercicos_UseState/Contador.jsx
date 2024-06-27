import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  function handleincrementar() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleincrementar}> Incrementar</button>
      <p> Conteo: {count} </p>
    </div>
  );
}

export default Contador;
