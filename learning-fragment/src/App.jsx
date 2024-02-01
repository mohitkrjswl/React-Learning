import Fooditems from "./components/Fooditems";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Item from "./components/Item";
// import foodItems from "./components/Fooditems";

function App() {
  let foodItems = ["Dal", "Roti", "Ghee", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <Fooditems items={foodItems}></Fooditems>
      
    </>
  );
}

export default App;
