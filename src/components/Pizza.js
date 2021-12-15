import React from "react";

const Pizza = (props) => {
  const { topping, size, id, vegetarian } = props.pizzas;
  return (
    <tr key={id}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button
          onClick={props.pizzaDetail}
          type="button"
          className="btn btn-primary"
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
