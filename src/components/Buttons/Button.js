import "./Button.css";
import Inputbox from "../Inputbox/Inputbox";
import React, { useState } from "react";

function Button() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentagem(e) {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }
  return (
    <div className="btncalc">
      <h1 className="typebox">{num}</h1>
      <div className="AC">
        <button onClick={clear} id="orange">
          AC
        </button>
      </div>
      <div className="plusminus">
        <button onClick={changeSign} id="orange">
          +/-
        </button>
      </div>
      <div className="percent">
        <button onClick={porcentagem} id="orange">
          &#37;
        </button>
      </div>
      <div className="divide">
        <button onClick={operatorHandler} id="orange" value={"/"}>
          &#247;
        </button>
      </div>
      <div className="seven">
        <button onClick={inputNum} value={7}>
          7
        </button>
      </div>
      <div className="eight">
        <button onClick={inputNum} value={8}>
          8
        </button>
      </div>
      <div className="nine">
        <button onClick={inputNum} value={9}>
          9
        </button>
      </div>
      <div className="multiply">
        <button onClick={operatorHandler} id="orange" value={"X"}>
          X
        </button>
      </div>
      <div className="four">
        <button onClick={inputNum} value={4}>
          4
        </button>
      </div>
      <div className="five">
        <button onClick={inputNum} value={5}>
          5
        </button>
      </div>
      <div className="six">
        <button onClick={inputNum} value={6}>
          6
        </button>
      </div>
      <div className="minus">
        <button onClick={operatorHandler} id="orange" value={"-"}>
          &minus;
        </button>
      </div>
      <div className="one">
        <button onClick={inputNum} value={1}>
          1
        </button>
      </div>
      <div className="two">
        <button onClick={inputNum} value={2}>
          2
        </button>
      </div>
      <div className="three">
        <button onClick={inputNum} value={3}>
          3
        </button>
      </div>
      <div className="plus">
        <button onClick={operatorHandler} id="orange" value={"+"}>
          &#43;
        </button>
      </div>
      <div className="zero">
        <button onClick={inputNum} id="zeroid" value={0}>
          0
        </button>
      </div>
      <div className="equal">
        <button onClick={calculate}>&#61;</button>
      </div>
      <div className="dot">
        <button onClick={inputNum} id="orange" value={"."}>
          .
        </button>
      </div>
    </div>
  );
}
export default Button;
