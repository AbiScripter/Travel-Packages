import React, { useState } from "react";

const initalItems = [
  // { id: 1, description: "Passports", quantity: 2, packed: false },
  // { id: 2, description: "Socks", quantity: 12, packed: true },
];

function PackageLists() {
  const [items, setItems] = useState(initalItems);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function Item({ item }) {
    return (
      <li className="item">
        <input type="checkbox" />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <span>{"❌"}</span>
      </li>
    );
  }

  function addItem(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    let newItem = {
      id: 1,
      description: description,
      quantity: quantity,
      packed: false,
    };

    setItems([...items, newItem]);
    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={addItem}>
        <>What do you need for your trip?</>

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

      <div className="list">
        <ul>
          {items.map((item, index) => {
            return <Item key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default PackageLists;
