import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ pizzas: data });
        console.log(this.state.pizzas);
      });
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pizzas.map((pizza, id) => {
            return <Pizza pizzas={pizza} key={id} pizzaDetail={id + 1} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default PizzaList;
