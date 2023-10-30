import React, { useState } from "react";
import Item from "./item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let newItems = [];

  if (sortBy === "input") newItems = items;
  else if (sortBy === "description") {
    newItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else {
    //if its packed
    newItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list">
        <ul>
          {/* //rendering each item */}
          {newItems.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            );
          })}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input order</option>
            <option value="description">Sort by Description </option>
            <option value="packed">Sort by Packed Status </option>
          </select>
        </div>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </>
  );
}
export default PackingList;
