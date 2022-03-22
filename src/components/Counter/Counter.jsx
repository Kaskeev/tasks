import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    setNumber(number - 1);
  }
  return (
    <div className="block">
      <p>{number}</p>
      <Button className="btn" onClick={increment}>
        +
      </Button>
      <Button className="btn" onClick={decrement}>
        -
      </Button>
      <Button variant="primary" size="lg" active>
        <Link className="btns" to="/">
          Home
        </Link>
      </Button>
    </div>
  );
};

export default Counter;
