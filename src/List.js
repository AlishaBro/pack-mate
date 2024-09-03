import React, { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortby, setsortby] = useState("order");
  let sortedItems;
  if (sortby === "order") {
    sortedItems = items;
  }

  if (sortby === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortby === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onClearItem={onClearItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="order">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed Items</option>
        </select>

        <button onClick={() => onClearItem()}>Clear</button>
      </div>
    </div>
  );
}
