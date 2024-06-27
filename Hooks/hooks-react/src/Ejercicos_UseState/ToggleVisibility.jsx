import { useState } from "react";

const ToggleVisibility = () => {
  const [isHidden, setIsHidden] = useState(false);
  function esconder() {
    setIsHidden(!isHidden);
  }
  return (
    <div>
      <button onClick={esconder}> Show/Hide Text </button>
      {isHidden ? <p> Toggle me! </p> : <p></p>}
    </div>
  );
};

export default ToggleVisibility;
