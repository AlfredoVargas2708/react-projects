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
  let [numero, setNumero] = useState([]);
  let [formula, setFormula] = useState("");
  let [resultadoFinal, setResultadoFinal] = useState(0);

  function restard() {
    setNumero([]);
    setFormula("");
    setResultadoFinal(0);
  }

  function formulas(e) {
    if (e.target.className === "suma") {
      setFormula("suma");
    } else if (e.target.className === "resta") {
      setFormula("resta");
    } else if (e.target.className === "multiplicacion") {
      setFormula("multiplicacion");
    } else if (e.target.className === "division") {
      setFormula("division");
    } else if (e.target.className === "modulo") {
      setFormula("modulo");
    }
  }

  function mostrar() {
    let i = 0;
    let decimal = 0;
    let result = [];

    for (let i = 0; i < numero.length; i++) {
      if (numero[i] === ".") {
        decimal = numero[i - 1] + numero[i] + numero[i + 1];
        result.push(decimal);
        if (i > 0 && !numero[i - 1].includes(".")) {
          numero[i - 1] = null;
        }
        if (i < numero.length && !numero[i + 1].includes(".")) {
          numero[i + 1] = null;
        }
      }
    }
    let filteredArray = numero.filter(
      (element) => element !== null && element !== "."
    );
    if (filteredArray.length > 0) {
      result.push(filteredArray);
    }

    result = result.filter(
      (element) => !(Array.isArray(element) && element.length === 0)
    );

    console.log(result);
    while (i < result.length) {
      if (formula === "suma") {
        resultadoFinal = resultadoFinal + Number(result[i]);
      } else if (formula === "resta") {
        resultadoFinal = resultadoFinal - Number(result[i]);
      } else if (formula === "multiplicacion") {
        resultadoFinal = resultadoFinal * Number(result[i]);
      } else if (formula === "division") {
        resultadoFinal = resultadoFinal / Number(result[i]);
      } else if (formula === "modulo") {
        resultadoFinal = resultadoFinal % Number(result[i]);
      }
      i++;
    }
    setResultadoFinal(resultadoFinal);
    setNumero([]);
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
          value={resultadoFinal}
          onChange={(e) => setResultadoFinal(e.target.value)}
        />
      </section>
      <section className="first-row">
        <button className="letra-c" onClick={restard}>
          {" "}
          <TbLetterC />{" "}
        </button>
        <button className="parentesis">
          {" "}
          <LuParentheses />{" "}
        </button>
        <button className="modulo" onClick={formulas}>
          {" "}
          <CgMathPercent />{" "}
        </button>
        <button className="division" onClick={formulas}>
          {" "}
          <CgMathDivide />{" "}
        </button>
      </section>
      <section className="second-row">
        <button
          className="numero7"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          7{" "}
        </button>
        <button
          className="numero8"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          8{" "}
        </button>
        <button
          className="numero9"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          9{" "}
        </button>
        <button className="multiplicacion" onClick={formulas}>
          {" "}
          <LiaTimesSolid />{" "}
        </button>
      </section>
      <section className="third-row">
        <button
          className="numero4"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          4{" "}
        </button>
        <button
          className="numero5"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          5{" "}
        </button>
        <button
          className="numero6"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          6{" "}
        </button>
        <button className="resta" onClick={formulas}>
          {" "}
          <CgMathMinus />{" "}
        </button>
      </section>
      <section className="fourth-row">
        <button
          className="numero1"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          1{" "}
        </button>
        <button
          className="numero2"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          2{" "}
        </button>
        <button
          className="numero3"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          3{" "}
        </button>
        <button className="suma" onClick={formulas}>
          {" "}
          <CgMathPlus />{" "}
        </button>
      </section>
      <section className="fifth-row">
        <button className="mas-menos"> +/- </button>
        <button className="numero0"> 0 </button>
        <button
          className="punto"
          onClick={(e) =>
            setNumero((prevState) => [...prevState, e.target.innerText])
          }
        >
          {" "}
          .{" "}
        </button>
        <button className="igual" onClick={mostrar}>
          {" "}
          <CgMathEqual />{" "}
        </button>
      </section>
    </main>
  );
}

export default App;
