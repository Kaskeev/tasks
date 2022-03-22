import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="block">
      <Button variant="primary" size="lg" active className="btnss">
        <Link className="btns" to="/counter">
          Counter
        </Link>
      </Button>
      <Button variant="primary" size="lg" active className="btnss">
        <Link className="btns" to="/receipts">
          Рецепты
        </Link>
      </Button>
    </div>
  );
};

export default Home;
