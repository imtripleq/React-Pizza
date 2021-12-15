import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaForm: "",
    };
  }

  passPizzaDetail(pizza) {
    this.setState({ pizzaForm: pizza });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm />
        <PizzaList />
      </Fragment>
    );
  }
}

export default App;
