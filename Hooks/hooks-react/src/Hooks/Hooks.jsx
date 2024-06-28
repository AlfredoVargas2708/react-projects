import { useState, useEffect } from "react";

const Hooks = () => {
  return (
    <div>
      <UseState />
      <ShowWindowWidth />
    </div>
  );
};

export default Hooks;

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function ShowWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Creamos una función para actualizar el estado con el clientWidth
    const updateWidth = () => {
      const width = document.body.clientWidth;
      console.log(`updateWidth con ${width}`);
      setWidth(width);
    };
    // Actualizaremos el width al montar el componente
    updateWidth();
    // Nos suscribimos al evento resize de window
    window.addEventListener("resize", updateWidth);

    // Devolvemos una función para anular la suscripción al evento
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return (
    <div>
      <span>Width es de {width}px</span>
    </div>
  );
}
