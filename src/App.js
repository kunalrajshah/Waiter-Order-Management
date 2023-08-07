import React, { useState, useEffect } from "react";
import "./App.css";
import Output from "./Output";
import Input from "./Input";
import Select from "./Select";

function App() {
  const [orderID, setOrderId] = useState("");
  const [IputPrice, setInputPrice] = useState("");
  const [InputDish, setInputDish] = useState("");
  const [InputTable, setInputTable] = useState("");

  // For store Output
  const [orders, setOrders] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  // Save data to local storage whenever orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Taking Inputs.
  const orderIDHandler = (event) => {
    setOrderId(event.target.value);
  };
  const InputPriceHandler = (event) => {
    setInputPrice(event.target.value);
  };
  const InputDishHandler = (event) => {
    setInputDish(event.target.value);
  };
  const InputTableHandler = (event) => {
    setInputTable(event.target.value);
  };
  // Click event handler
  const addToBillHandler = (event) => {
    event.preventDefault(); // Prevent form submission
    const newOrder = {
      id: orderID,
      price: IputPrice,
      table: InputTable,
      dishName: InputDish,
    };
    setOrders([...orders, newOrder]);
    // Clear the input fields after adding the order to the bill
    setOrderId("");
    setInputPrice("");
    setInputDish("");
    setInputTable("");
  };

  return (
    <div className="App">
      <form>
        <Input
          label="Unique order ID"
          type="number"
          value={orderID}
          onChange={orderIDHandler}
        />
        <Input
          label="Choose Price"
          type="number"
          value={IputPrice}
          onChange={InputPriceHandler}
        />
        <Input
          label="Choose Dish"
          type="text"
          value={InputDish}
          onChange={InputDishHandler}
        />
        <Select value={InputTable} onChange={InputTableHandler} />
        <button style={{ cursor: "pointer" }} onClick={addToBillHandler}>
          Add to bill
        </button>
      </form>
      <Output data={orders} set={setOrders} />
    </div>
  );
}

export default App;
