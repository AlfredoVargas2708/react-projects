import { useState } from "react";

const InputField = () => {
  const [texto, setTexto] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <p> Input text: {texto} </p>
    </div>
  );
};

export default InputField;
