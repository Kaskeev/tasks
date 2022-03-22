import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Receipts.css";

const Receipts = () => {
  const [meal, setMeal] = useState([]);

  return (
    <div className="inputs">
      <input
        type="radio"
        value="Котлеты"
        onChange={(e) => setMeal(e.target.value)}
        id="cotlets"
        name="meal"
      />
      <label>Котлеты из овощей</label>
      <input
        type="radio"
        value="Помидоры"
        onChange={(e) => setMeal(e.target.value)}
        id="pomidor"
        name="meal"
      />
      <label>Помидоры с сыром в духовке</label>
      <input
        type="radio"
        value="chiken"
        onChange={(e) => setMeal(e.target.value)}
        id="chiken"
        name="meal"
      />
      <label>Курица, запеченная с картофелем</label>
      <Ingredients meal={meal} />
      <Button className="btn" variant="primary" size="lg" active>
        <Link className="btns-btns" to="/">
          Home
        </Link>
      </Button>
    </div>
  );
};

export default Receipts;
