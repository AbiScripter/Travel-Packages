import React, { useState } from "react";
import Item from "./item";

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
export default PackingList;
