import { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea rows={3} cols={25} onChange={(e) => setText(e.target.value)} />
      <p> Character count: {text.length} </p>
    </div>
  );
};

export default CharacterCounter;
