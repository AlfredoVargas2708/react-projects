import {
  CgMathDivide,
  CgMathEqual,
  CgMathMinus,
  CgMathPlus,
  CgMathPercent,
} from "react-icons/cg";
import { LuParentheses } from "react-icons/lu";
import { TbLetterC } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";
import "./App.css";
import { useState } from "react";

function App() {
  const [inicial, setInicial] = useState(0);
  const [numero, setNumero] = useState(0);
  function restard() {
    setInicial(0);
  }

  function agregarNumero() {
    if (inicial === 0) {
      setInicial(Number(numero));
    } else {
      setInicial(Number(inicial) + Number(numero));
    }
    setNumero(0);
  }

  return (
    <main>
      {" "}
      <header>
        <h1> Calculadora </h1>
      </header>
      <section>
        <input
          id="calculo"
          type="text"
          value={inicial}
          onChange={(e) => setInicial(e.target.value)}
        />
      </section>
      <section className="first-row">
        <button className="letra-c" onClick={restard}>
          {" "}
          <TbLetterC />{" "}
        </button>
        <button className="parentsis">
          {" "}
          <LuParentheses />{" "}
        </button>
        <button className="modulo">
          {" "}
          <CgMathPercent />{" "}
        </button>
        <button className="division">
          {" "}
          <CgMathDivide />{" "}
        </button>
      </section>
      <section className="second-row">
        <button
          className="numero7"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          7{" "}
        </button>
        <button
          className="numero8"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          8{" "}
        </button>
        <button
          className="numero9"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          9{" "}
        </button>
        <button className="multplicar">
          {" "}
          <LiaTimesSolid />{" "}
        </button>
      </section>
      <section className="third-row">
        <button
          className="numero4"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          4{" "}
        </button>
        <button
          className="numero5"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          5{" "}
        </button>
        <button
          className="numero6"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          6{" "}
        </button>
        <button className="resta">
          {" "}
          <CgMathMinus />{" "}
        </button>
      </section>
      <section className="fourth-row">
        <button
          className="numero1"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          1{" "}
        </button>
        <button
          className="numero2"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          2{" "}
        </button>
        <button
          className="numero3"
          onClick={(e) => setNumero(e.target.innerText)}
        >
          {" "}
          3{" "}
        </button>
        <button className="suma" onClick={agregarNumero}>
          {" "}
          <CgMathPlus />{" "}
        </button>
      </section>
      <section className="fifth-row">
        <button className="mas-menos"> +/- </button>
        <button className="numero0"> 0 </button>
        <button className="punto"> . </button>
        <button className="igual">
          {" "}
          <CgMathEqual />{" "}
        </button>
      </section>
    </main>
  );
}

export default App;
