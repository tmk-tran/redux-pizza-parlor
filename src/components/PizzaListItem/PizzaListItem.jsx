import React, { useState } from "react";
import { useDispatch } from "react-redux";


export default function PizzaListItem({ pizza }) {
const dispatch = useDispatch();
const [numberOfPizzas, setNumberOfPizzas] = useState(0)
  

  const addToCart = () => {
    const newLineItem = {
      order_id: "FROM CUSTOMER INFORMATION",
      pizza_id: pizza.id,
      quantity: numberOfPizzas
    }
    //console.log('clickyclick');
    dispatch({
      type: "POST_PIZZAS",
      payload: newPizza
      
    });
 
  }
  ////need an axios to save the add to cart items to database so they refresh and it persists, **line items table in database
  
  return (
    <div>
      <ul>
        <img src={pizza.image_path} />
        <br />
        <br />
        <hr />

        <ul>Pizza: {pizza.name}</ul>
        <br />
        <ul>Price: {pizza.price}</ul>
        <br />
        <ul>Description: {pizza.description}</ul>
      </ul>
      <br />
      <input type="number" value={numberOfPizzas} onChange={(e) => setNumberOfPizzas(e.target.value)} />
      <button onClick={addToCart} >Add to Cart</button>
      <br />
      <br />
    </div>
  );
}
