import { useState } from "react";

function EurosDolares() {
  const [euros, setEuros] = useState("");
  const [dolraes, setDolares] = useState("");

  const convertir = () => {
    setDolares(euros * 2);
  };
  return (
    <>
      <div>
        <label>
          {" "}
          Ingrese la cantidad de euros:
          <input
            type="number"
            value={euros}
            onChange={(e) => setEuros(e.target.value)}
          />
        </label>
        <button onClick={convertir}> Cambiar </button>
      </div>
      <div>
        <p> La cantidad en dolares: {dolraes} </p>
      </div>
    </>
  );
}

export default EurosDolares;
