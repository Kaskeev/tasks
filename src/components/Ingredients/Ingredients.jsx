import React from "react";

const Ingredients = ({ meal }) => {
  return (
    <div>
      {meal === "Котлеты" ? (
        <p>
          Ингредиенты: оливковое масло, кабачки, картофель, помидоры, лук
          репчатый, соль, перец горошком, яйцо куриное, мука пшеничная высшего
          сорта
        </p>
      ) : null}

      {meal === "Помидоры" ? (
        <p>
          Ингредиенты: помидоры, брынза, оливки, оливковое масло, базилик
          сушеный
        </p>
      ) : null}

      {meal === "chiken" ? (
        <p>
          Ингредиенты: масло сливочное, оливковое масло, куриные бедра, куриные
          ножки, картофель, чеснок, лук репчатый, лимон, бульон куриный, горчица
          французская в зернах, эстрагон
        </p>
      ) : null}
    </div>
  );
};

export default Ingredients;
