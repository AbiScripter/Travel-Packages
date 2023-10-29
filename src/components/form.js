import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    //if description is empty
    if (!description) {
      return;
    }

    //creating new items based on the description and quantity
    const newItem = {
      id: Date.now(), //using current time as id
      description: description,
      quantity: quantity,
      packed: false,
    };

    //added this function via props from App.js
    onAddItems(newItem);

    //setting to inital state after adding the new one
    setDescription("");
    setQuantity(1);
  }

  return (
    //onSubmit submits the form either ENTER or ADD Clicked
    <form className="add-form" onSubmit={handleSubmit}>
      <span>What do you need for your trip?</span>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
